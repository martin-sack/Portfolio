import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  
  if (measurementId) {
    ReactGA.initialize(measurementId);
    console.log('Google Analytics initialized');
  } else {
    console.warn('Google Analytics Measurement ID not found');
  }
};

// Track page views
export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

// Track custom events
export const trackEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string) => {
  trackEvent('Button', 'Click', buttonName);
};

// Track form submissions
export const trackFormSubmit = (formName: string) => {
  trackEvent('Form', 'Submit', formName);
};

// Track downloads
export const trackDownload = (fileName: string) => {
  trackEvent('Download', 'Click', fileName);
};

// Track external links
export const trackExternalLink = (url: string) => {
  trackEvent('External Link', 'Click', url);
};
