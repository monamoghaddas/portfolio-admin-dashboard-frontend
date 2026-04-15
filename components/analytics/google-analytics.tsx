"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { pageView, trackEvent } from "@/lib/analytics/google-analytics";

type GoogleAnalyticsProps = {
  gaId: string;
};

type QueuedEvent = {
  name: string;
  params: Record<string, string | number | boolean | null | undefined>;
};

declare global {
  interface Window {
    __gaReady?: boolean;
  }
}

export default function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isGaReady, setIsGaReady] = useState(false);
  const queuedEventsRef = useRef<QueuedEvent[]>([]);

  const flushQueuedEvents = useCallback(() => {
    if (!window.gtag || queuedEventsRef.current.length === 0) return;
    for (const event of queuedEventsRef.current) {
      trackEvent(event.name, event.params);
    }
    queuedEventsRef.current = [];
  }, []);

  useEffect(() => {
    const onGaReady = () => {
      if (!window.gtag) return;
      setIsGaReady(true);
    };

    if (window.gtag || window.__gaReady) {
      onGaReady();
    }

    window.addEventListener("ga-ready", onGaReady);
    return () => {
      window.removeEventListener("ga-ready", onGaReady);
    };
  }, []);

  useEffect(() => {
    if (!isGaReady) return;
    flushQueuedEvents();
  }, [flushQueuedEvents, isGaReady]);

  useEffect(() => {
    if (!isGaReady) return;
    if (!pathname) return;
    const query = searchParams?.toString();
    const path = query ? `${pathname}?${query}` : pathname;
    pageView(gaId, path);
  }, [gaId, isGaReady, pathname, searchParams]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const clickable = target.closest<HTMLElement>("[data-ga-event]");
      if (!clickable) return;

      const eventName = clickable.dataset.gaEvent;
      if (!eventName) return;

      const params = {
        event_category: clickable.dataset.gaCategory ?? "engagement",
        event_label: clickable.dataset.gaLabel ?? undefined,
        cta_location: clickable.dataset.gaLocation ?? undefined,
      };

      if (!isGaReady || !window.gtag) {
        queuedEventsRef.current.push({ name: eventName, params });
        return;
      }

      trackEvent(eventName, params);
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isGaReady]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${gaId}', { send_page_view: false });
          window.__gaReady = true;
          window.dispatchEvent(new Event('ga-ready'));
        `}
      </Script>
    </>
  );
}
