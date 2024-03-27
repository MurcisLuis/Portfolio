import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link, routeLoader$ } from "@builder.io/qwik-city";
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

export default component$(() => {
  const project=useProjectInfo();
  return (
    <div class="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
      <div class="space-y-6">
        <main class="mx-auto grid max-w-3xl grid-cols-6 gap-6 px-6 py-16">
          <GroupContent colSpan={6} mdColSpan={6} class="flex flex-col md:flex-row h-auto md:h-52  justify-center overflow-hidden rounded-2xl bg-pink-200 px-8 py-auto dark:border-pink-500 dark:bg-pink-500/25 dark:shadow-none dark:backdrop-blur-2xl">

              {
                imagesMap[project.value.id]
                  ? imagesMap[project.value.id]({ alt: project.value.id, width: 200, height: 200, class: "w-auto h-auto m-4" })
                  : <div class="w-auto h-auto mx-auto md:mx-0 "><span class="my-auto">Icono no disponible</span></div>
              }
          </GroupContent>
          {/* Description section */}
          <GroupContent colSpan={6} class="flex flex-col md:flex-row h-auto md:h-52  justify-center overflow-hidden rounded-2xl bg-pink-200 px-8 py-auto dark:border-pink-500 dark:bg-pink-500/25 dark:shadow-none dark:backdrop-blur-2xl">
              <p class="text-md text-pink-900 dark:text-pink-300 m-auto">{project.value.description}</p>
          </GroupContent>
          {/* Features section */}
          <GroupContent colSpan={6} class="flex flex-col items-center justify-between overflow-hidden rounded-lg bg-gradient-to-tr from-green-500 to-green-300 p-6 shadow-lg dark:from-green-600 dark:to-green-400">
            <h2 class="text-2xl font-semibold text-gray-800 dark:text-green-100 m-auto">Features</h2>
          </GroupContent>
          {project.value.features.map((feature:any) => (
          <GroupContent colSpan={3} key={feature.name} class="flex flex-col items-center justify-between overflow-hidden rounded-lg bg-gradient-to-tr from-green-500 to-green-300 p-6 shadow-lg dark:from-green-600 dark:to-green-400 hover:scale-105 transition-transform duration-300 ease-in-out">
            <div  class="flex items-center justify-center w-full">
              {/* Icono de la característica, si está disponible */}
              {feature.icon && imagesMap[feature.icon] (
                 imagesMap[feature.icon]({ alt: feature.name, width: 200, height: 200, class: "object-contain max-w-full max-h-full w-[200px] h-[200px] p-auto" })
              )}
              {/* Si no hay icono, puedes optar por mostrar un placeholder o simplemente omitir este bloque */}
            </div>
            <div class="text-center">
              <h3 class="text-xl font-semibold text-gray-800 dark:text-green-100">{feature.name}</h3>
              <p class="text-sm text-gray-700 dark:text-green-200">{feature.description}</p>
            </div>
          </GroupContent>
          ))}
          {/* Technologies section */}

          <GroupContent colSpan={6} class="flex flex-col md:flex-row h-auto md:h-28  justify-center overflow-hidden rounded-2xl bg-gradient-to-tr from-blue-500 to-blue-300 p-6 shadow-lg dark:from-blue-600 dark:to-blue-400 dark:shadow-none dark:backdrop-blur-2xl">
            <h2 class="text-2xl font-semibold text-gray-800 dark:text-blue-100 m-auto">Technologies</h2>
          </GroupContent>
          {project.value.technologies.map((tech:any) => (
            <GroupContent key={tech.name} colSpan={3} mdColSpan={2} class={'h-40 md:h-auto overflow-hidden flex '}>
              <div key={tech.name} title={tech.name} class="items-center place-content-center">
                    {
                      imagesMap[tech.icon]
                      ? imagesMap[tech.icon]({ alt: tech.name, width: 200, height: 200, class: "object-contain max-w-full max-h-full w-[200px] h-[200px] p-auto" })
                      : <div class="w-52 h-52 text-center">
                            <span class="my-auto">Icono no disponible</span>
                          </div>
                    }                  
              </div>
            </GroupContent>
          
          ))}

          {/* Links section */}
          <GroupContent colSpan={6} class="flex flex-col md:flex-row h-auto md:h-28  justify-center overflow-hidden rounded-2xl bg-gradient-to-tr from-teal-500 to-teal-400 px-8 py-auto dark:from-teal-700 dark:to-teal-600 dark:shadow-none dark:backdrop-blur-2xl">
            <h2 class="text-2xl font-semibold text-gray-800 dark:text-teal-100 m-auto">Links</h2>
          </GroupContent>
          
          {project.value.links.map((link: any) => (
            <GroupContent key={link.name} colSpan={3} mdColSpan={2} class="h-40 md:h-auto">
              <Link href={link.url} target={link.url.startsWith('http') ? "_blank" : "_self"} class="rounded-lg bg-gradient-to-tr flex flex-col justify-between overflow-hidden h-full min-h-[220px] from-teal-500 to-teal-400 p-6 shadow-lg dark:from-teal-700 dark:to-teal-600 hover:scale-105 transition-transform duration-300 ease-in-out">
                <div class="flex flex-col justify-between h-full">
                  <div class="w-full flex justify-center">
                    {link.icon && imagesMap[link.icon] ? imagesMap[link.icon]({ alt: link.name, width: 200, height: 200, class: "object-contain max-w-full max-h-full w-[200px] h-[200px]" }) : <div class="w-52 h-52 flex items-center justify-center"><span class="my-auto">Icono no disponible</span></div>}
                  </div>
                  <div class="text-center">
                    <p class="text-xl font-semibold text-gray-800 dark:text-teal-100">{link.name}</p>
                    <p class="text-sm text-gray-700 dark:text-teal-200">{link.description}</p>
                  </div>
                  {typeof link.price !== 'undefined' && (
                    <div class="mt-2 self-end">
                      {link.price === 0 ? <span class="text-sm font-semibold text-gray-800 dark:text-teal-100">Free</span> : <span class="text-sm font-semibold text-gray-800 dark:text-teal-100">${link.price}</span>}
                    </div>
                  )}
                </div>
              </Link>
            </GroupContent>
          ))}


          {/* Back button */}
          <Link href="/" class='fixed bottom-4 m-2 flex h-12 w-12 items-center justify-center justify-self-end rounded-full bg-blue-700 p-3 text-white shadow-lg hover:bg-blue-600 dark:bg-white dark:text-blue-700 dark:hover:bg-gray-200'>
            <ImageBackArrow height={30} width={30}/>
          </Link>
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
