import { useEffect, useState } from 'react';

const SCROLL_THRESHOLD = 20;

export const useScrollYPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollY = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY);

      if (scrollDelta >= SCROLL_THRESHOLD) {
        setScrollY(currentScrollY);
        lastScrollY = currentScrollY;
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollY);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrollY;
};
