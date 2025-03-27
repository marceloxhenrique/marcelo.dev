"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Project } from "@/components/ProjectsList";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Projects = () => {
  const { projectName } = useParams();
  const projectDecode = decodeURI(projectName!.toString());
  const [projectFiltered] = Project.filter(
    (project) => project.title == projectDecode,
  );
  const [selectedImage, setSelectedImage] = useState(
    projectFiltered?.mockupImages[0] || null,
  );

  if (projectFiltered) {
    return (
      <main className="flex min-h-screen flex-col">
        <div className="container mx-auto h-full max-w-7xl grow p-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href={"/#PROJECTS"}
              className="group mb-8 inline-flex items-center text-slate-700 transition-colors hover:text-slate-900"
            >
              <IoIosArrowRoundBack className="mr-1 h-8 w-8 transition-transform group-hover:translate-x-[-4px]" />
              <span className="text-lg font-medium">Back to Projects</span>
            </Link>
          </motion.div>
          <div className="grid gap-12 lg:grid-cols-[2fr_2fr] lg:gap-16 ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col space-y-8"
            >
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                {projectFiltered.title}
              </h1>
              <div className="h-96 w-full max-w-[40rem] overflow-hidden rounded-2xl bg-white/80  p-2 shadow-xl backdrop-blur-sm">
                <Image
                  src={selectedImage || projectFiltered.normalImage}
                  alt={`${projectFiltered.title} image`}
                  width={800}
                  height={200}
                  className="h-full rounded-xl object-contain transition-all duration-300 hover:scale-[1.02] lg:object-cover"
                  priority
                />
              </div>
              <div className="prose prose-lg max-w-none rounded-xl bg-white/80 p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold text-slate-900">
                  About this project
                </h2>
                <p className="text-lg leading-relaxed text-slate-700">
                  {projectFiltered.description}
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col space-y-8 lg:sticky lg:top-8"
            >
              <div className="overflow-hidden rounded-2xl bg-white/80 p-6 shadow-lg backdrop-blur-sm ">
                <h2 className="mb-4 text-xl font-semibold text-slate-900">
                  Project Gallery
                </h2>
                <div className="grid grid-cols-3 gap-3">
                  {projectFiltered.mockupImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(image)}
                      className={`overflow-hidden rounded-lg transition-all ${
                        selectedImage === image
                          ? "ring-2 ring-slate-900 ring-offset-2"
                          : "hover:opacity-90"
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        className="aspect-square h-full w-full object-cover"
                        width={100}
                        height={100}
                        alt={`${projectFiltered.title} preview ${index + 1}`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl bg-white/80 p-6 shadow-lg backdrop-blur-sm">
                <h2 className="mb-4 text-xl font-semibold text-slate-900">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {projectFiltered.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-800 transition-colors hover:bg-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4 xl:flex-row">
                <a
                  href={projectFiltered.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-4 text-lg font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg"
                >
                  <FiExternalLink className="h-5 w-5 transition-transform group-hover:translate-y-[-2px]" />
                  View Live Project
                </a>
                <a
                  href={projectFiltered.gitHubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl border-2 border-slate-900 bg-white/80 px-6 py-4 text-lg font-semibold text-slate-900 backdrop-blur-sm transition-all hover:bg-slate-50 hover:shadow-lg"
                >
                  <FiGithub className="h-5 w-5 transition-transform group-hover:translate-y-[-2px]" />
                  View Source Code
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  // 404 Page
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex h-screen w-full flex-col items-center justify-center gap-8 px-4 text-center"
    >
      <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
        Oops! Project Not Found
      </h1>
      <p className="max-w-md text-lg text-slate-600">
        We couldn't find the project you're looking for. It might have been
        moved or deleted.
      </p>
      <Link href={"/"}>
        <Button
          variant="outline"
          className="mt-4 border-2 border-slate-900 px-8 py-6 text-lg font-semibold transition-all hover:bg-slate-900 hover:text-white"
        >
          Back to Home
        </Button>
      </Link>
    </motion.div>
  );
};

export default Projects;
