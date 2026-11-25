import { useEffect, useRef, useState } from 'react';

export function useInView<T extends HTMLElement = HTMLElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // options is intentionally captured once — IntersectionObserver re-creation is unnecessary
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
}
