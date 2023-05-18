import { useEffect, useState } from 'react';

const SCROLL_THRESHOLD = 5;

export type ScrollDirection = 'up' | 'down';

export const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState<ScrollDirection>('down');

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      const scrollDelta = Math.abs(scrollY - lastScrollY);

      if (scrollDelta >= SCROLL_THRESHOLD) {
        if (scrollY > lastScrollY && scrollDir !== 'down') {
          setScrollDir('down');
        } else if (scrollY < lastScrollY && scrollDir !== 'up') {
          setScrollDir('up');
        }

        lastScrollY = scrollY > 0 ? scrollY : 0;
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);

  return scrollDir;
};
