import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export const AnimatedCounter = component$<AnimatedCounterProps>(
  ({ end, duration = 2000, suffix = '', prefix = '' }) => {
    const displayValue = useSignal(0);
    const elementRef = useSignal<HTMLDivElement>();

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
      if (!elementRef.value) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const startTime = Date.now();
            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              displayValue.value = Math.floor(end * progress);

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            animate();
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(elementRef.value);
      return () => observer.disconnect();
    });

    return (
      <div ref={elementRef} class="text-3xl font-bold text-tech-primary">
        {prefix}
        {displayValue.value}
        {suffix}
      </div>
    );
  }
);
