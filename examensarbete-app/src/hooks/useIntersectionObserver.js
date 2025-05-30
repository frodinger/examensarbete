import { useState, useEffect } from 'react';

/**
 * Hook för att upptäcka när ett element blir synligt i viewport
 * Användbart för att trigga animationer när innehåll scrollas in i vy
 */
export const useIntersectionObserver = (ref, options = {}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    
    // Spara referensen till den aktuella DOM-noden
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(([entry]) => {
      // Om elementet är synligt och inte redan markerat som synligt
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    }, { threshold: 0.2, ...options });
    
    observer.observe(currentRef);
    
    return () => {
      // Använd den sparade referensen i cleanup-funktionen
      observer.unobserve(currentRef);
    };
  }, [ref, options, isVisible]);

  return isVisible;
}; 