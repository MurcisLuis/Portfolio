import { component$ } from '@builder.io/qwik';
import { GroupContent } from '../content/GroupContent';
import timelineData from '~/data/timeline.json';

export const TechTimeline = component$(() => {
  return (
    <GroupContent colSpan={6} class="h-auto">
      <div class="relative w-full p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 overflow-hidden">
        {/* Header */}
        <div class="mb-6">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-xs font-mono text-tech-accent">// journey</span>
          </div>
          <h3 class="text-xl md:text-2xl font-bold text-white">
            Technical Evolution
          </h3>
          <p class="text-sm text-slate-400 mt-1">
            From Minecraft plugins to modern web architecture
          </p>
        </div>

        {/* Timeline */}
        <div class="relative">
          {/* Vertical line */}
          <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-tech-primary via-tech-secondary to-tech-accent" />

          {/* Timeline items */}
          <div class="space-y-6">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.year}
                  class={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Year marker */}
                  <div class="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 w-8 h-8 rounded-full bg-tech-primary flex items-center justify-center border-4 border-slate-800 shadow-lg shadow-tech-primary/50">
                    <div class="w-2 h-2 rounded-full bg-white" />
                  </div>

                  {/* Content card */}
                  <div class={`pl-14 md:pl-0 ${isEven ? 'md:pr-8 md:w-1/2' : 'md:pl-8 md:w-1/2'}`}>
                    <div class="p-4 rounded-xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm hover:border-tech-primary transition-all duration-300">
                      <div class="flex items-center gap-2 mb-1">
                        <span class="text-2xl font-bold text-tech-primary font-mono">{item.year}</span>
                        <span class="text-xs px-2 py-0.5 rounded bg-tech-accent/20 text-tech-accent font-mono">
                          {item.milestone}
                        </span>
                      </div>
                      <h4 class="font-bold text-white mb-1">{item.title}</h4>
                      <p class="text-xs text-slate-400 mb-2">{item.description}</p>
                      <div class="flex flex-wrap gap-1">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            class="text-xs px-2 py-0.5 rounded bg-slate-700 text-slate-300 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty space for opposite side */}
                  <div class="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </GroupContent>
  );
});
