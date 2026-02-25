import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1, triggerOnce = true) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger once if triggerOnce is true
        if (entry.isIntersecting && (!triggerOnce || !hasTriggered.current)) {
          setIsVisible(true);
          hasTriggered.current = true;
          
          // Disconnect observer after first trigger to save resources
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(entry.isIntersecting);
        }
      },
      {
        threshold,
        rootMargin: '50px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, triggerOnce]);

  return { ref, isVisible };
};
