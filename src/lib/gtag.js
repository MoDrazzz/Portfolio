export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
export const pageview = (url) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", GA_ID, {
      page_location: url,
    });
  }
};
export const event = ({ action, category, label, value }) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};
