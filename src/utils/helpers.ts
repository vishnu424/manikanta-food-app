import { useEffect, useState } from 'react';

export function SetCategoryOnScroll(
  categoryRefs: any,
  setCategory: any,
  NAV_HEIGHT: any = 95
) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const visibleMenuSection = () => {
    const offsets = categoryRefs.current.map(
      (section: { offsetTop: number }) =>
        section && section.offsetTop - NAV_HEIGHT
    );
    const offsetsInRange = offsets.filter(
      (offset: number) => offset && offset <= scrollPosition
    );
    const offset = offsetsInRange[offsetsInRange.length - 1];
    categoryRefs.current.forEach((category: { offsetTop: number; id: any }) => {
      if (category) {
        if (!category.offsetTop) return;
        if (offset === category.offsetTop - NAV_HEIGHT) {
          setCategory(category.id);
        }
      }
    });
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    visibleMenuSection();
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}
