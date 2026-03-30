export const CALENDLY_URL = "https://calendly.com/dixitambaliya303/30min";

export function getCalendlyEmbedUrl(url: string) {
  const calendlyUrl = new URL(url);
  calendlyUrl.searchParams.set("embed_type", "Inline");
  calendlyUrl.searchParams.set("embed_domain", "1");
  return calendlyUrl.toString();
}
