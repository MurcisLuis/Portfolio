import { component$ } from '@builder.io/qwik';
import { GroupContent } from '../content/GroupContent';

interface TechDecisionCardProps {
  technology: string;
  context: string;
  advantages: string[];
  tradeoffs: string[];
  whyChosen: string;
  colSpan?: number;
  mdColSpan?: number;
}

export const TechDecisionCard = component$<TechDecisionCardProps>(
  ({ technology, context, advantages, tradeoffs, whyChosen, colSpan = 6, mdColSpan = 3 }) => {
    return (
      <GroupContent colSpan={colSpan} mdColSpan={mdColSpan} class="h-auto">
        <div class="relative h-full w-full p-6 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 transform transition-all duration-500 group-hover:scale-[0.98] active:scale-100 overflow-hidden border border-slate-200 dark:border-slate-700">
          {/* Header */}
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-mono text-tech-accent">//</span>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">
              Why {technology}?
            </h3>
          </div>

          {/* Context */}
          <p class="text-xs text-slate-500 dark:text-slate-400 mb-4 font-mono">
            {context}
          </p>

          {/* Why Chosen - Main message */}
          <div class="mb-4 p-3 rounded-lg bg-tech-primary/10 border-l-4 border-tech-primary">
            <p class="text-sm text-slate-800 dark:text-slate-200 italic">
              {whyChosen}
            </p>
          </div>

          {/* Advantages */}
          <div class="mb-3">
            <h4 class="text-xs font-bold text-green-600 dark:text-green-400 mb-1.5">
              ✓ Advantages
            </h4>
            <ul class="space-y-1">
              {advantages.slice(0, 3).map((adv, i) => (
                <li key={i} class="text-xs text-slate-600 dark:text-slate-300 flex gap-2">
                  <span class="text-green-500">•</span>
                  <span>{adv}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tradeoffs */}
          {tradeoffs.length > 0 && (
            <div>
              <h4 class="text-xs font-bold text-amber-600 dark:text-amber-400 mb-1.5">
                ⚠ Tradeoffs
              </h4>
              <ul class="space-y-1">
                {tradeoffs.slice(0, 2).map((tradeoff, i) => (
                  <li key={i} class="text-xs text-slate-600 dark:text-slate-300 flex gap-2">
                    <span class="text-amber-500">•</span>
                    <span>{tradeoff}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </GroupContent>
    );
  }
);
