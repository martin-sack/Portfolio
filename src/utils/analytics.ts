import { track } from '@vercel/analytics';

// Initialize analytics (Vercel Analytics auto-initializes)
export const initGA = () => {
  console.log('Vercel Analytics initialized');
};

// Track page views (Vercel Analytics tracks automatically)
export const trackPageView = (path: string) => {
  // Vercel Analytics tracks page views automatically
  console.log('Page view:', path);
};

// Track custom events
export const trackEvent = (category: string, action: string, label?: string) => {
  const eventName = `${category}_${action}`;
  track(eventName, { label });
};

// Track button clicks
export const trackButtonClick = (buttonName: string) => {
  track('button_click', { button: buttonName });
};

// Track form submissions
export const trackFormSubmit = (formName: string) => {
  track('form_submit', { form: formName });
};

// Track downloads
export const trackDownload = (fileName: string) => {
  track('download', { file: fileName });
};

// Track external links
export const trackExternalLink = (url: string) => {
  track('external_link', { url });
};
