import { component$ } from "@builder.io/qwik";
import { GroupContent } from "../content/GroupContent";
import { Link } from "@builder.io/qwik-city";

import projects from "~/data/data.json";
import imagesMap from "../Image";

// Importaciones de imágenes sin ?jsx




// Asigna cada imagen a su ID correspondiente en el proyecto


export const ProjectsCards = component$(() => {
  return (
    <>
      {projects.map((project) => (
        <GroupContent key={project.id} colSpan={3} mdColSpan={2} class={'h-40 md:h-52'}>
          <Link href={`/project/${project.id}`} class='group relative h-full w-full flex flex-col justify-center items-center overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-95 active:scale-100 dark:bg-zinc-600 bg-gray-100'>
            {imagesMap[project.id]({ alt: project.name, width: 1023, height: 555, class: "w-24 h-16 sm:w-28 sm:h-20 md:w-36 md:h-28 sm:scale-125 mx-auto" })}
          </Link>
        </GroupContent>
      ))}
    </>
  );
});
