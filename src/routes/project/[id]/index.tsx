import { component$ } from "@builder.io/qwik";
import { type DocumentHead, Link, routeLoader$ } from "@builder.io/qwik-city";
import imagesMap, { ImageBackArrow } from "~/components/Image";
import { GroupContent } from "~/components/content/GroupContent";

import projects from "~/data/data.json";


export const useProjectInfo = routeLoader$<any>(
  async ({ params, redirect }) => {
    const projectId = params.id;
    const project =projects.find(p => p.id === projectId);
    if (project?.name == null) redirect(301,"/")
    return project;
  }
);

// ... imports previos permanecen iguales

export default component$(() => {
  const project = useProjectInfo();
  return (
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div class="space-y-6">
        <main class="mx-auto grid max-w-3xl grid-cols-6 gap-6 px-6 py-16">
          {/* Sección de Header */}
          <GroupContent colSpan={6} class="flex flex-col md:flex-row h-auto items-center justify-between rounded-2xl bg-gradient-to-tr from-purple-800/90 to-purple-600/90 backdrop-blur-sm border border-purple-900/50 px-2">
            <Link href="/" class="flex items-center gap-2 text-purple-200 hover:text-purple-100 transition-colors">
              <ImageBackArrow class="w-6 h-6 fill-current" />
              <span class="text-lg">Back to Portfolio</span>
            </Link>
            <div class="mt-4 md:mt-0">
              {imagesMap[project.value.id] &&
                imagesMap[project.value.id]({
                  alt: project.value.id,
                  width: 100,
                  height: 100,
                  class: "w-24 h-24 md:w-32 md:h-32 object-contain filter drop-shadow-lg"
                })}
            </div>
          </GroupContent>

          {/* Sección de Links de Descarga */}
          <GroupContent colSpan={6} class="rounded-2xl bg-slate-800/90 backdrop-blur-sm border border-slate-700/50">
            <h2 class="text-2xl font-bold text-center text-slate-100 mb-6">Get Started</h2>
            <div class="grid grid-cols-6 gap-4">
              {project.value.links.map((link: any) => (
                <GroupContent key={link.name} colSpan={3} class="h-auto">
                  <Link
                    href={link.url}
                    target="_blank"
                    class={`flex flex-col items-center justify-center h-full p-4 rounded-xl transition-all duration-200 
                      border ${
                        link.price > 0 
                          ? 'border-amber-500/30 hover:border-amber-400/50 bg-amber-900/20 hover:bg-amber-800/30'
                          : 'border-emerald-500/30 hover:border-emerald-400/50 bg-emerald-900/20 hover:bg-emerald-800/30'
                      }`}
                  >
                    <div class="flex flex-col items-center justify-center flex-1 w-full">
                      {imagesMap[link.icon] && 
                        imagesMap[link.icon]({
                          alt: link.name,
                          class: "w-16 h-16 mb-4 object-contain filter brightness-125"
                        })}
                      <div class="text-center">
                        <p class="text-lg font-semibold text-slate-100">{link.name}</p>
                        {typeof link.price !== 'undefined' && (
                          <p class="mt-1 text-sm font-medium">
                            {link.price === 0 ? (
                              <span class="text-emerald-400">FREE</span>
                            ) : (
                              <span class="text-amber-400">${link.price}</span>
                            )}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                </GroupContent>
              ))}
            </div>
          </GroupContent>

          {/* Sección de Descripción */}
          <GroupContent colSpan={6} class="rounded-2xl bg-slate-800/90 backdrop-blur-sm border border-slate-700/50">
            <h2 class="text-2xl font-bold text-slate-100 mb-4">Project Overview</h2>
            <p class="text-slate-300 text-lg leading-relaxed">{project.value.description}</p>
          </GroupContent>

          {/* Sección de Características */}
          <GroupContent colSpan={6} class="rounded-2xl bg-slate-800/90 backdrop-blur-sm border border-slate-700/50">
            <h2 class="text-2xl font-bold text-slate-100 mb-6">Key Features</h2>
            <div class="grid grid-cols-6 gap-4">
              {project.value.features.map((feature: any) => (
                <GroupContent 
                  key={feature.name} 
                  colSpan={3} 
                  class="p-4 rounded-lg bg-slate-700/20 hover:bg-slate-700/30 border border-slate-600/30 transition-colors"
                >
                  <div class="flex items-start gap-4">
                    {imagesMap[feature.icon] && 
                      imagesMap[feature.icon]({
                        alt: feature.name,
                        class: "w-12 h-12 flex-shrink-0 object-contain filter brightness-125"
                      })}
                    <div>
                      <h3 class="text-lg font-semibold text-slate-100">{feature.name}</h3>
                      <p class="text-slate-400 mt-1">{feature.description}</p>
                    </div>
                  </div>
                </GroupContent>
              ))}
            </div>
          </GroupContent>

          {/* Sección de Tecnologías */}
          <GroupContent colSpan={6} class="rounded-2xl bg-slate-800/90 backdrop-blur-sm border border-slate-700/50">
            <h2 class="text-2xl font-bold text-slate-100 mb-6">Technologies Used</h2>
            <div class="grid grid-cols-6 gap-4">
              {project.value.technologies.map((tech: any) => (
                <GroupContent 
                  key={tech.name} 
                  colSpan={3} 
                  mdColSpan={2} 
                  class="flex items-center justify-center p-4 bg-slate-700/20 rounded-lg hover:bg-slate-700/30 border border-slate-600/30 transition-colors"
                >
                  <div class="flex flex-col items-center">
                    {imagesMap[tech.icon] &&
                      imagesMap[tech.icon]({
                        alt: tech.name,
                        class: "w-16 h-16 mb-2 object-contain filter brightness-125"
                      })}
                    <span class="text-slate-300 text-sm font-medium">{tech.name}</span>
                  </div>
                </GroupContent>
              ))}
            </div>
          </GroupContent>
        </main>
      </div>
    </div>
  );
});


export const head: DocumentHead = ({ resolveValue }) => {

  const project=resolveValue(useProjectInfo)

  return {
    title: `${project.name} - Luis Aldea Diez Portfolio`,
    meta: [
      {
        name: "description",
        content: project.description,
      },
      {
        name: "keywords",
        content: `Luis Aldea Diez, Portfolio, ${project.name}, ${project.technologies.join(', ')}`,
      },
      {
        property: "og:title",
        content: `${project.name} - Luis Aldea Diez Portfolio`,
      },
      {
        property: "og:description",
        content: project.description,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: `https://murcisluis.es/projects/${project.id}`,
      },
      {
        property: "og:image",
        content: project.imageURL, 
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  };
};
