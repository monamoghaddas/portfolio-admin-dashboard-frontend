export type DemoSettings = {
  emailNotifications: boolean;
  productUpdates: boolean;
  compactTables: boolean;
};

export const SETTINGS_STORAGE_KEY = "portfolio-demo-settings";

export const defaultDemoSettings: DemoSettings = {
  emailNotifications: true,
  productUpdates: false,
  compactTables: false,
};

export function parseDemoSettings(raw: string | null): DemoSettings {
  if (!raw) return { ...defaultDemoSettings };
  try {
    const parsed = JSON.parse(raw) as Partial<DemoSettings>;
    return {
      emailNotifications:
        typeof parsed.emailNotifications === "boolean"
          ? parsed.emailNotifications
          : defaultDemoSettings.emailNotifications,
      productUpdates:
        typeof parsed.productUpdates === "boolean"
          ? parsed.productUpdates
          : defaultDemoSettings.productUpdates,
      compactTables:
        typeof parsed.compactTables === "boolean"
          ? parsed.compactTables
          : defaultDemoSettings.compactTables,
    };
  } catch {
    return { ...defaultDemoSettings };
  }
}
