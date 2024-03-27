import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { ContentSection } from "~/components/content/ContentSection";
import { GroupContent } from "~/components/content/GroupContent";
import { Countdown } from "~/components/countdown/CountdownComponent";
import { Weather } from "~/components/weather/WeatherComponent";
import { ContactForm } from "~/components/contactform/ContactMe";

import { ProjectsCards } from "~/components/projects/ProyectsCards";
import { ImageAndroid, ImageBitBucket, ImageBoostrap, ImageComposer, ImageCss, ImageDocker, ImageFigma, ImageFirebase, ImageGit, ImageGitHub, ImageGradle, ImageHtml, ImageIntellj, ImageJava, ImageMaria, ImageMaven, ImageModelEngine, ImageMysql, ImageMythicMobs, ImageNode, ImageNpm, ImageOracle, ImagePaper, ImagePhp, ImagePipy, ImagePython, ImageQwik, ImageReact, ImageSQLite, ImageSpigot, ImageSymphony, ImageTailwindcss, ImageVsCode } from "~/components/Image";

export default component$(() => (
  <>
    <div class="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
      <div class="space-y-6">
        <main class="mx-auto grid max-w-3xl grid-cols-6 gap-6 px-6 py-16">
          <GroupContent colSpan={6} mdColSpan={4} class={"h-auto md:h-52 justify-between overflow-hidden rounded-2xl bg-pink-200 px-8 py-8 dark:border-pink-500 dark:bg-pink-500/25 dark:shadow-none dark:backdrop-blur-2xl"}>
            {/** 
            <div class="flex">
              <Link href="https://www.youtube.com/@Murcis_Luis/videos" target="_blank" class="flex items-center justify-center space-x-1.5 rounded-full bg-pink-300 px-2 py-0.5 font-title dark:bg-pink-500/25">
                <span>programming</span>
              </Link>
            </div>*/}
            <div class="flex flex-col items-center justify-between text-center md:text-left">
            <div class="mb-4 md:mb-8 flex items-center gap-2 flex-col md:flex-row">
              <p class="text-md text-pink-900 dark:text-pink-300">
                Hello, I'm
              </p>
              <h1 class="text-xl md:text-2xl font-bold text-pink-900 dark:text-pink-300">
                Luis Aldea Diez
              </h1>
              <p class="text-md text-pink-900 dark:text-pink-300">
                Fullstack Developer
              </p>
            </div>
              <p class="text-md text-pink-900 text-center dark:text-pink-300">
                Fueled by my passion for technology, I craft innovative web and mobile solutions aimed at excellence. Explore my portfolio to see the unique experiences I create.
              </p>
            </div>
          </GroupContent>
          <GroupContent colSpan={3} mdColSpan={2} class={'h-full'}>
            <Link href="https://www.linkedin.com/in/luis-aldea-diez" target="_blank" class='flex h-full items-center justify-center rounded-2xl bg-white text-blue-700 dark:bg-blue-700 dark:text-white text-4xl transform-gpu transition-all duration-500 will-change-[outline,_transform] group-hover:scale-95 active:scale-100'>
              <svg class="w-20 h-20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd" />
                <path d="M7.2 8.8H4v10.7h3.2V8.8Z" />
              </svg>
            </Link>
          </GroupContent>
          <ContentSection colSpan={3} mdColSpan={2} class={'flex h-40 md:h-52 items-center justify-center rounded-2xl text-4xl text-white/90 bg-blue-600'}>
            <div class="flex">
              <div class='-rotate-[4deg] scale-[0.6]  space-y-1 text-center sm:scale-[1.2] md:scale-[1.5]'>
                <h2><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path></svg></h2>
                <p class='text-base'>@Murcis_Luis</p>
              </div>
            </div>
            <div class="flex">

            </div>
          </ContentSection>
          <Weather class='col-span-3 md:col-span-2 h-40 md:h-52 overflow-hidden rounded-2xl dark:from-[#1B263B] dark:to-[#415A77] bg-gradient-to-br from-[#0A8DFF] to-[#98CFFF] first-letter:w-full'/>
          <ContentSection colSpan={3} mdColSpan={2} class={'flex items-center justify-center rounded-2xl bg-indigo-100 text-indigo-500 dark:bg-[#23224c] dark:text-indigo-400 md:text-2xl'}>
            <Countdown targetDay={15} targetMonth={6} />
          </ContentSection>
          <GroupContent colSpan={6} class={'h-40 md:h-52'}>
            <Link href="https://github.com/MurcisLuis" target="_blank" class=' group relative h-full w-full flex-col justify-between overflow-hidden rounded-2xl transform-gpu transition-all duration-500 will-change-[outline,_transform] group-hover:scale-95 active:scale-100 dark:bg-zinc-600 bg-gray-100 grid grid-cols-6 items-center dark:text-white text-black'>
            <ImageGitHub class="dark:fill-white col-span-3 md:col-span-2 ml-5 sm:ml-10 md:ml-20 w-20 h-full sm:w-32 md:w-50" />
            <div class="col-span-3 md:col-span-4 text-xl md:text-4xl font-mono">
            <p>Github</p>
            <p>Minecraft & projects</p>

            </div>
            </Link>
          </GroupContent>
          <ProjectsCards/>
          
          <div class="col-span-6 space-y-2 rounded-2xl bg-yellow-200 p-6 dark:bg-indigo-800 md:col-span-4 grid grid-cols-5 sm:grid-cols-8 md:grid-cols-11 gap-2 items-center">
            {/* Específicos de Minecraft */}
            <div title="Spigot"><ImageSpigot style={{ width: '32px', height: '32px'}} class="mt-2"/></div>
            <div title="Paper"><ImagePaper style={{ width: '32px', height: '32px'}}/></div>
            <div title="MythicMobs"><ImageMythicMobs style={{ width: '32px', height: '32px'}}/></div>
            <div title="ModelEngine"><ImageModelEngine style={{ width: '32px', height: '32px'}}/></div>



            {/* Lenguajes de Programación y Otros */}
            <div title="Java"><ImageJava style={{ width: '32px', height: '32px'}}/></div>
            <div title="PHP"><ImagePhp style={{ width: '32px', height: '32px'}}/></div>
            <div title="Composer"><ImageComposer style={{ width: '32px', height: '32px'}}/></div>
            <div title="BitBucket"><ImageBitBucket style={{ width: '32px', height: '32px'}}/></div>
            <div title="IntelliJ"><ImageIntellj style={{ width: '32px', height: '32px'}}/></div>
            <div title="Visual Studio Code"><ImageVsCode style={{ width: '32px', height: '32px'}}/></div>
            <div title="Symfony"><ImageSymphony style={{ width: '32px', height: '32px'}}/></div>
            <div title="Python"><ImagePython style={{ width: '32px', height: '32px'}}/></div>


            {/* Desarrollo Web */}
            <div title="HTML"><ImageHtml style={{ width: '32px', height: '32px'}}/></div>
            <div title="CSS"><ImageCss style={{ width: '32px', height: '32px'}}/></div>
            <div title="JavaScript"><ImageNode style={{ width: '32px', height: '32px'}}/></div>
            <div title="React"><ImageReact style={{ width: '32px', height: '32px'}}/></div>
            <div title="Qwik"><ImageQwik style={{ width: '32px', height: '32px'}}/></div>
            <div title="Tailwind CSS"><ImageTailwindcss style={{ width: '32px', height: '32px'}}/></div>
            <div title="Bootstrap"><ImageBoostrap style={{ width: '32px', height: '32px'}}/></div>

            {/* Bases de Datos */}
            <div title="MySQL"><ImageMysql style={{ width: '32px', height: '32px'}}/></div>
            <div title="MariaDB"><ImageMaria style={{ width: '32px', height: '32px'}}/></div>
            <div title="SQLite"><ImageSQLite style={{ width: '32px', height: '32px'}}/></div>
            <div title="Oracle"><ImageOracle style={{ width: '32px', height: '32px'}}/></div>
            <div title="Firebase"><ImageFirebase style={{ width: '32px', height: '32px'}}/></div>

            {/* Herramientas de Desarrollo */}
            <div title="Git"><ImageGit style={{ width: '32px', height: '32px'}}/></div>
            <div title="GitHub"><ImageGitHub style={{ width: '32px', height: '32px'}}/></div>
            {/*<div title="GitBook"><ImageGitBook style={{ width: '32px', height: '32px'}}/></div>*/}
            <div title="Docker"><ImageDocker style={{ width: '32px', height: '32px'}}/></div>
            <div title="Gradle"><ImageGradle style={{ width: '32px', height: '32px'}}/></div>
            <div title="Maven"><ImageMaven style={{ width: '32px', height: '32px'}}/></div>
            <div title="NPM"><ImageNpm style={{ width: '32px', height: '32px'}}/></div>
            <div title="Pipy"><ImagePipy style={{ width: '32px', height: '32px'}}/></div>

            {/* Herramientas de Diseño */}
            <div title="Figma"><ImageFigma style={{ width: '32px', height: '32px'}}/></div>
            <div title="Android"><ImageAndroid style={{ width: '32px', height: '32px'}}/></div> {/* Asumiendo que Android representa diseño móvil */}

            

            
          </div>
          <ContactForm/>
        </main>
      </div>

    </div>
  </>
));

export const head: DocumentHead = {
  title: "Porfolio Luis Aldea Diez",
  meta: [
    {
      name: "description",
      content: "Here you can get information about me",
    },
    { 
      name: "keywords",
      content: "Murcis, Luis Aldea Diez,Luis, LujoEmotes, LujoKarts, BasePlugin, Developer Fullstack, Developer Plugins Minecraft,Developer Web,Developer Android" 
    },
    {
      name: "og:locale",
      content: "en_US",
    },

  ],
};
