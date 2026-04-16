import { component$ } from '@builder.io/qwik';

interface ArchitectureDiagramProps {
  diagram: string;
  title?: string;
}

interface ParsedNode {
  id: string;
  label: string;
  isDatabase: boolean;
}

interface ParsedEdge {
  from: string;
  to: string;
}

const parseDiagram = (diagram: string): { nodes: ParsedNode[]; edges: ParsedEdge[] } => {
  const lines = diagram.split('\n').filter((l) => l.trim() && !l.startsWith('graph'));
  const nodes = new Map<string, ParsedNode>();
  const edges: ParsedEdge[] = [];

  for (const line of lines) {
    const parts = line.split('-->').map((s) => s.trim());
    for (let i = 0; i < parts.length; i++) {
      const match = parts[i].match(/^(\w+)(?:\[([^\]]+)\]|\(\(([^)]+)\)\)|\(([^)]+)\))?$/);
      if (match) {
        const [, id, bracketLabel, doubleParenLabel, parenLabel] = match;
        const label = bracketLabel || doubleParenLabel || parenLabel || id;
        const isDatabase = line.includes(`${id}[(`) || parts[i].includes('(');
        if (!nodes.has(id)) {
          nodes.set(id, { id, label, isDatabase });
        }
      }
    }

    for (let i = 0; i < parts.length - 1; i++) {
      const fromMatch = parts[i].match(/^(\w+)/);
      const toMatch = parts[i + 1].match(/^(\w+)/);
      if (fromMatch && toMatch) {
        edges.push({ from: fromMatch[1], to: toMatch[1] });
      }
    }
  }

  return { nodes: Array.from(nodes.values()), edges };
};

export const ArchitectureDiagram = component$<ArchitectureDiagramProps>(
  ({ diagram, title = 'Architecture Overview' }) => {
    const { nodes, edges } = parseDiagram(diagram);

    // Group nodes by their hierarchical level based on edges
    const levels = new Map<string, number>();
    nodes.forEach((n) => levels.set(n.id, 0));

    let changed = true;
    let iterations = 0;
    while (changed && iterations < 10) {
      changed = false;
      iterations++;
      for (const edge of edges) {
        const fromLevel = levels.get(edge.from) ?? 0;
        const toLevel = levels.get(edge.to) ?? 0;
        if (toLevel <= fromLevel) {
          levels.set(edge.to, fromLevel + 1);
          changed = true;
        }
      }
    }

    const maxLevel = Math.max(...Array.from(levels.values()));
    const nodesByLevel: ParsedNode[][] = Array.from({ length: maxLevel + 1 }, () => []);
    nodes.forEach((node) => {
      const level = levels.get(node.id) ?? 0;
      nodesByLevel[level].push(node);
    });

    return (
      <div class="w-full p-6 rounded-xl bg-slate-900 border border-slate-700 overflow-x-auto">
        <div class="flex items-center gap-2 mb-4">
          <span class="text-xs font-mono text-tech-accent">// architecture</span>
          <h4 class="text-sm font-bold text-white font-mono">{title}</h4>
        </div>

        <div class="flex flex-col gap-6 min-w-fit">
          {nodesByLevel.map((levelNodes, levelIdx) => (
            <div key={levelIdx} class="flex flex-col items-center">
              <div class="flex flex-wrap justify-center gap-3">
                {levelNodes.map((node) => (
                  <div
                    key={node.id}
                    class={`
                      px-4 py-2 rounded-lg font-mono text-xs
                      border-2 min-w-[100px] text-center
                      transition-all duration-300 hover:scale-105
                      ${
                        node.isDatabase
                          ? 'bg-tech-secondary/20 border-tech-secondary text-tech-secondary'
                          : levelIdx === 0
                          ? 'bg-tech-primary/20 border-tech-primary text-tech-primary'
                          : 'bg-slate-800 border-slate-600 text-slate-200'
                      }
                    `}
                  >
                    {node.label}
                  </div>
                ))}
              </div>

              {/* Arrow down to next level */}
              {levelIdx < maxLevel && (
                <div class="my-2 text-tech-accent text-xl">↓</div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
);
