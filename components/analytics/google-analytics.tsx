"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { pageView, trackEvent } from "@/lib/analytics/google-analytics";

type GoogleAnalyticsProps = {
  gaId: string;
};

type QueuedEvent = {
  name: string;
  params: Record<string, string | number | boolean | null | undefined>;
};

const LOCATION_CHANGE_EVENT = "ga-location-change";

function subscribeToLocationSearch(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const notify = () => onStoreChange();
  const originalPushState = window.history.pushState;
  const originalReplaceState = window.history.replaceState;

  window.history.pushState = function pushStateWrapper(...args) {
    originalPushState.apply(this, args);
    window.dispatchEvent(new Event(LOCATION_CHANGE_EVENT));
  };

  window.history.replaceState = function replaceStateWrapper(...args) {
    originalReplaceState.apply(this, args);
    window.dispatchEvent(new Event(LOCATION_CHANGE_EVENT));
  };

  window.addEventListener("popstate", notify);
  window.addEventListener(LOCATION_CHANGE_EVENT, notify);

  return () => {
    window.history.pushState = originalPushState;
    window.history.replaceState = originalReplaceState;
    window.removeEventListener("popstate", notify);
    window.removeEventListener(LOCATION_CHANGE_EVENT, notify);
  };
}

function getLocationSearchSnapshot() {
  if (typeof window === "undefined") return "";
  return window.location.search;
}

declare global {
  interface Window {
    __gaReady?: boolean;
  }
}

export default function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  const pathname = usePathname();
  const locationSearch = useSyncExternalStore(
    subscribeToLocationSearch,
    getLocationSearchSnapshot,
    () => "",
  );
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
    const query = locationSearch.replace(/^\?/, "");
    const path = query ? `${pathname}?${query}` : pathname;
    pageView(gaId, path);
  }, [gaId, isGaReady, locationSearch, pathname]);

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
