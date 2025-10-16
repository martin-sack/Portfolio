// Simple analytics tracking
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // In production, integrate with Google Analytics, Mixpanel, or similar
  console.log('Event tracked:', eventName, properties);
  
  // Example Google Analytics 4 integration:
  // if (typeof gtag !== 'undefined') {
  //   gtag('event', eventName, properties);
  // }
};

export const trackPageView = (page: string) => {
  trackEvent('page_view', { page });
};

export const trackProjectView = (projectName: string) => {
  trackEvent('project_viewed', { project: projectName });
};

export const trackContactForm = (formType: string) => {
  trackEvent('contact_form_submitted', { form_type: formType });
};

export const trackResumeDownload = () => {
  trackEvent('resume_downloaded');
};