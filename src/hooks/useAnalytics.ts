import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

/**
 * Custom hook to track page views automatically on route change
 */
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      // Track page view
      window.gtag('config', 'G-DC7HFJJM34', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
};

/**
 * Track custom events
 * @param eventName - Name of the event (e.g., 'project_click', 'contact_click')
 * @param eventParams - Additional parameters for the event
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, eventParams);
  }
};
