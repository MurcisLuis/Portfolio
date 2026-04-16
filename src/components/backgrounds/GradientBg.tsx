import { component$ } from '@builder.io/qwik';

interface GradientBgProps {
  gradient?: 'tech' | 'dark-tech' | 'custom';
  animate?: boolean;
  children?: any;
}

export const GradientBg = component$<GradientBgProps>(
  ({ gradient = 'tech', animate = true, children }) => {
    const gradientClass = {
      'tech': 'bg-gradient-tech',
      'dark-tech': 'bg-gradient-dark-tech',
      'custom': 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
    }[gradient];

    return (
      <div
        class={`
          ${gradientClass}
          ${animate ? 'animate-pulse' : ''}
          relative overflow-hidden rounded-xl p-8
          transition-all duration-500 hover:shadow-2xl
        `}
      >
        {/* Animated background effect */}
        {animate && (
          <div class="absolute inset-0 opacity-20 bg-gradient-to-br from-white to-transparent rounded-xl" />
        )}

        {/* Content */}
        <div class="relative z-10">{children}</div>
      </div>
    );
  }
);
