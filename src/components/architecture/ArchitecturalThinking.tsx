import { component$ } from '@builder.io/qwik';
import { GroupContent } from '../content/GroupContent';

interface ArchitecturalThinkingProps {
  projectName: string;
  problemStatement: string;
  solution: string;
  keyDecisions: string[];
  colSpan?: number;
  mdColSpan?: number;
}

export const ArchitecturalThinking = component$<ArchitecturalThinkingProps>(
  ({ projectName, problemStatement, solution, keyDecisions, colSpan = 6, mdColSpan = 3 }) => {
    return (
      <GroupContent colSpan={colSpan} mdColSpan={mdColSpan} class="h-auto">
        <div class="relative h-full w-full p-6 rounded-2xl bg-white dark:bg-slate-800 transform transition-all duration-500 group-hover:scale-[0.98] active:scale-100 border border-slate-200 dark:border-slate-700">
          {/* Project name header */}
          <div class="flex items-center gap-2 mb-4">
            <div class="w-2 h-2 rounded-full bg-tech-accent animate-tech-pulse" />
            <h3 class="text-base font-bold text-slate-900 dark:text-white font-mono">
              {projectName}
            </h3>
          </div>

          {/* Problem */}
          <div class="mb-4">
            <h4 class="text-xs font-bold text-red-600 dark:text-red-400 mb-1 uppercase tracking-wider">
              The Problem
            </h4>
            <p class="text-sm text-slate-700 dark:text-slate-300">
              {problemStatement}
            </p>
          </div>

          {/* Solution */}
          <div class="mb-4">
            <h4 class="text-xs font-bold text-green-600 dark:text-green-400 mb-1 uppercase tracking-wider">
              The Solution
            </h4>
            <p class="text-sm text-slate-700 dark:text-slate-300">
              {solution}
            </p>
          </div>

          {/* Key Decisions */}
          <div>
            <h4 class="text-xs font-bold text-tech-primary mb-2 uppercase tracking-wider">
              Key Decisions
            </h4>
            <ul class="space-y-1.5">
              {keyDecisions.map((decision, i) => (
                <li key={i} class="text-xs text-slate-600 dark:text-slate-400 flex gap-2 items-start">
                  <span class="text-tech-primary font-mono mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </GroupContent>
    );
  }
);
