import { component$ } from '@builder.io/qwik';

interface Metrics {
  performance?: string;
  deployment?: string;
  downloads?: number;
  rating?: number;
  stars?: number;
  users?: number;
  lighthouse?: number;
  status?: string;
}

interface PerformanceMetricsProps {
  metrics: Metrics;
}

export const PerformanceMetrics = component$<PerformanceMetricsProps>(({ metrics }) => {
  const performanceColor = {
    excellent: 'text-green-500',
    good: 'text-blue-500',
    standard: 'text-amber-500',
  }[metrics.performance ?? 'standard'] ?? 'text-slate-500';

  return (
    <div class="w-full p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
      <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 font-mono">
        // Project Metrics
      </h4>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.performance && (
          <div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-1">Performance</p>
            <p class={`text-sm font-bold capitalize ${performanceColor}`}>
              {metrics.performance}
            </p>
          </div>
        )}

        {metrics.deployment && (
          <div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-1">Deployment</p>
            <p class="text-sm font-bold text-slate-900 dark:text-white">
              {metrics.deployment}
            </p>
          </div>
        )}

        {metrics.downloads !== undefined && (
          <div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-1">Downloads</p>
            <p class="text-sm font-bold text-tech-primary">
              {metrics.downloads.toLocaleString()}+
            </p>
          </div>
        )}

        {metrics.users !== undefined && (
          <div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-1">Users</p>
            <p class="text-sm font-bold text-tech-primary">
              {metrics.users.toLocaleString()}+
            </p>
          </div>
        )}

        {metrics.rating !== undefined && (
          <div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-1">Rating</p>
            <p class="text-sm font-bold text-amber-500">
              ★ {metrics.rating}/5
            </p>
          </div>
        )}

        {metrics.stars !== undefined && (
          <div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-1">GitHub Stars</p>
            <p class="text-sm font-bold text-amber-500">
              ★ {metrics.stars}
            </p>
          </div>
        )}

        {metrics.lighthouse !== undefined && (
          <div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-1">Lighthouse</p>
            <p class="text-sm font-bold text-green-500">
              {metrics.lighthouse}/100
            </p>
          </div>
        )}

        {metrics.status && (
          <div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-1">Status</p>
            <p class="text-sm font-bold text-amber-500">
              {metrics.status}
            </p>
          </div>
        )}
      </div>
    </div>
  );
});
