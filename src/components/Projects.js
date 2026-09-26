import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data/index";

const Projects = () => {
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [activeImage, setActiveImage] = React.useState("");

  const handleProjectClick = (project) => {
    if (project.link) {
      window.open(project.link, "_blank", "noreferrer");
      return;
    }

    const gallery = Array.isArray(project.gallery)
      ? project.gallery
      : project.image
      ? [project.image]
      : [];

    setSelectedProject(project);
    setActiveImage(gallery[0] || "");
  };

  const galleryImages = selectedProject
    ? Array.isArray(selectedProject.gallery)
      ? selectedProject.gallery
      : selectedProject.image
      ? [selectedProject.image]
      : []
    : [];

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            What I&apos;ve Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            A selection of projects and product work spanning web, mobile, and
            business-focused experiences. Some projects are private or internal,
            so I share the problem, process, and results instead of a public demo.
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <button
              type="button"
              key={`${project.title}-${project.subtitle}`}
              onClick={() => handleProjectClick(project)}
              className="sm:w-1/2 w-full p-4 text-left"
            >
              <div className="flex relative h-80 overflow-hidden rounded-lg border border-gray-800">
                <img
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
                <div className="px-8 py-10 relative z-10 w-full flex flex-col justify-end">
                  <div className="mb-2 flex flex-wrap gap-2">
                    {project.tags?.slice(0, 2).map((tag) => (
                      <span
                        key={`${project.title}-${tag}`}
                        className="rounded-full border border-green-400/40 bg-green-500/10 px-2 py-1 text-[10px] uppercase tracking-widest text-green-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h3 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="leading-relaxed text-sm text-gray-200">
                    {project.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-gray-700 bg-gray-900 p-6 text-left shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-green-400">
                  {selectedProject.privateProject ? "Private project" : "Project case study"}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  {selectedProject.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-full border border-gray-600 px-3 py-1 text-sm text-gray-200 hover:border-white hover:text-white"
              >
                Close
              </button>
            </div>

            {galleryImages.length > 0 && (
              <>
                <div className="mt-6 overflow-hidden rounded-lg border border-gray-700 bg-gray-950">
                  <img
                    alt={selectedProject.title}
                    src={activeImage || galleryImages[0]}
                    className="h-64 w-full object-contain md:h-80"
                  />
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  {galleryImages.map((image, index) => (
                    <button
                      key={`${selectedProject.title}-${image}-${index}`}
                      type="button"
                      onClick={() => setActiveImage(image)}
                      className={`overflow-hidden rounded-lg border ${
                        activeImage === image || (!activeImage && index === 0)
                          ? "border-green-400"
                          : "border-gray-700"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${selectedProject.title} preview ${index + 1}`}
                        className="h-20 w-full object-contain bg-gray-950"
                      />
                    </button>
                  ))}
                </div>
              </>
            )}

            <div className="mt-5 flex flex-wrap gap-2">
              {selectedProject.tags?.map((tag) => (
                <span
                  key={`${selectedProject.title}-${tag}`}
                  className="rounded-full border border-gray-600 bg-gray-800 px-2 py-1 text-xs text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-5 text-base leading-relaxed text-gray-300">
              {selectedProject.details || selectedProject.description}
            </p>

            {selectedProject.link ? (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block rounded bg-indigo-500 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-400"
              >
                View Live Project
              </a>
            ) : (
              <div className="mt-6 rounded border border-dashed border-gray-600 bg-gray-800 px-4 py-3 text-sm text-gray-300">
                This project is not publicly shareable, but I can share a detailed walkthrough or demo during conversation.
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
