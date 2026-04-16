import { component$ } from '@builder.io/qwik';
import { Image } from '../Image';

export const Footer = component$(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="col-span-full bg-slate-950 text-white py-12 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4">
        {/* Main footer content */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 class="text-lg font-bold text-tech-primary mb-4">
              Luis Aldea Diez
            </h3>
            <p class="text-gray-400 text-sm">
              Software architect specialized in Minecraft ecosystem development and modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 class="font-semibold mb-4 text-tech-secondary">Quick Links</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#projects" class="hover:text-tech-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" class="hover:text-tech-accent transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://github.com/MurcisLuis" target="_blank" class="hover:text-tech-accent transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/luis-aldea" target="_blank" class="hover:text-tech-accent transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Available for Projects */}
          <div class="flex flex-col justify-center">
            <div class="bg-tech-primary/10 border border-tech-primary/30 rounded-lg p-4">
              <p class="text-tech-primary font-semibold text-sm mb-2">
                ✨ Available for Projects
              </p>
              <p class="text-gray-300 text-xs">
                Open to freelance work and exciting new challenges
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div class="border-t border-slate-800 my-8" />

        {/* Bottom footer */}
        <div class="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © {currentYear} Luis Aldea Diez. All rights reserved.
          </p>
          <p class="mt-4 md:mt-0">
            Built with Qwik + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
});
