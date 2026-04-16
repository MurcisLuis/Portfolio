import { component$ } from '@builder.io/qwik';
import { GroupContent } from '../content/GroupContent';

interface Technology {
  name: string;
  icon: string;
  years: number;
}

interface TechStackCategoryProps {
  id: string;
  title: string;
  description: string;
  proficiency: 'expert' | 'advanced' | 'intermediate';
  yearsExperience: number;
  technologies: Technology[];
  caseStudy: string;
  colSpan?: number;
  mdColSpan?: number;
}

export const TechStackCategory = component$<TechStackCategoryProps>(
  ({ title, description, proficiency, yearsExperience, technologies, caseStudy, colSpan = 6, mdColSpan = 3 }) => {
    const proficiencyColors = {
      expert: 'bg-tech-primary/20 text-tech-primary border-tech-primary/50',
      advanced: 'bg-tech-secondary/20 text-tech-secondary border-tech-secondary/50',
      intermediate: 'bg-tech-accent/20 text-tech-accent border-tech-accent/50',
    };

    return (
      <GroupContent colSpan={colSpan} mdColSpan={mdColSpan} class="h-auto">
        <div class="relative h-full w-full p-6 rounded-2xl bg-slate-100 dark:bg-slate-800 transform transition-all duration-500 group-hover:scale-[0.98] active:scale-100 overflow-hidden">
          {/* Proficiency badge */}
          <div class="flex items-center justify-between mb-3">
            <span class={`text-xs font-mono px-3 py-1 rounded-full border ${proficiencyColors[proficiency]}`}>
              {proficiency.toUpperCase()}
            </span>
            <span class="text-xs text-slate-500 dark:text-slate-400 font-mono">
              {yearsExperience}y exp
            </span>
          </div>

          {/* Title */}
          <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">
            {title}
          </h3>

          {/* Description */}
          <p class="text-sm text-slate-600 dark:text-slate-300 mb-4">
            {description}
          </p>

          {/* Technologies list */}
          <div class="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech.name}
                class="text-xs px-2 py-1 rounded-md bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600"
                title={`${tech.years} years experience`}
              >
                {tech.name}
              </span>
            ))}
          </div>

          {/* Case study */}
          <div class="border-t border-slate-200 dark:border-slate-700 pt-3">
            <p class="text-xs italic text-slate-500 dark:text-slate-400">
              "{caseStudy}"
            </p>
          </div>
        </div>
      </GroupContent>
    );
  }
);
