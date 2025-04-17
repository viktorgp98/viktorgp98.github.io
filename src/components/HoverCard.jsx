import { log } from "node_modules/astro/dist/core/logger/core";
import { useState } from "react";

const HoverCard = (props) => {
  const overlay = {
    true: "opacity:100",
    false: "opacity:0",
  };
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const { image, id, title, techstack } = props;
  return (
    <div class="bg-gray-100 flex h-full w-full client:only">
      <div class="relative group h-full w-full">
        {/* Project Image */}
        <div class="relative overflow-hidden h-full w-full">
          <img
            src={image}
            alt="Coding Project"
            class="w-full h-full object-cover transform transition-transform duration-400 group-hover:scale-110 grayscale group-hover:grayscale-0 overflow-hidden"
          />

          {/* Mobile Info Button */}
          <button
            id={`info-button-${id}`}
            class="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white md:hidden"
            onClick={console.log("algo")}
          >
            <span
              class="icon-[lucide--info]"
              role="img"
              aria-hidden="true"
            ></span>
          </button>

          {/* Hover Card */}
          <div
            class={`${overlay[isOverlayVisible]} project-card absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6`}
          >
            <h3 class="text-white text-2xl font-bold mb-2">
              {title ? title : "Undercontruction"}
            </h3>
            <p class="text-gray-200 text-sm mb-4">
              A beautiful web application built with React and TailwindCSS.
              Features modern design patterns and responsive layouts.
            </p>

            {/* Tech Stack */}
            <div class="flex gap-2 mb-4">
              {techstack ? (
                techstack.map((tech) => {
                  return (
                    <span class="px-3 py-1 bg-white/20 rounded-full text-white text-xs">
                      {tech}
                    </span>
                  );
                })
              ) : (
                <span class="px-3 py-1 bg-white/20 rounded-full text-white text-xs">
                  React
                </span>
              )}
            </div>

            {/* Links */}
            <div class="flex gap-4">
              <a
                href="#"
                class="text-white hover:text-blue-400 transition-colors duration-200 flex items-center gap-1"
              >
                <span
                  class="icon-[mdi--github]"
                  role="img"
                  aria-hidden="true"
                ></span>
                Code
              </a>
              <a
                href="#"
                class="text-white hover:text-blue-400 transition-colors duration-200 flex items-center gap-1"
              >
                <span
                  class="icon-[gg--external]"
                  role="img"
                  aria-hidden="true"
                ></span>
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
