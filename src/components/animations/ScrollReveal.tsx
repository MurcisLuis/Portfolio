import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

interface ScrollRevealProps {
  animation?: 'slide-up' | 'fade' | 'scale' | 'glow';
  delay?: number;
  children: any;
}

export const ScrollReveal = component$<ScrollRevealProps>(
  ({ animation = 'slide-up', delay = 0, children }) => {
    const elementRef = useSignal<HTMLDivElement>();
    const isVisible = useSignal(false);

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
      if (!elementRef.value) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              isVisible.value = true;
            }, delay);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(elementRef.value);

      return () => observer.disconnect();
    });

    const animationClass = {
      'slide-up': 'animate-slide-up',
      'fade': 'opacity-0 transition-opacity duration-700',
      'scale': 'scale-95 transition-transform duration-700',
      'glow': 'animate-glow',
    }[animation];

    return (
      <div
        ref={elementRef}
        class={`${animationClass} ${isVisible.value ? 'opacity-100 scale-100' : ''}`}
      >
        {children}
      </div>
    );
  }
);
