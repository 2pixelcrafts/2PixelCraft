import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import Image from "next/image";

const projects = [
  {
    name: "Lux",
    imageSrc: "/projects/lux.png",
    mobileImageSrc: "/projects/lux-mobile.png",
    imageAlt: "Lux project preview",
    liveUrl: "https://luxe.2pixelcraft.com/",
  },
  {
    name: "Timect Watches",
    imageSrc: "/projects/timect.png",
    mobileImageSrc: "/projects/timect-mobile.png",
    imageAlt: "Timect Watches project preview",
    liveUrl: "https://timectwatches.2pixelcraft.com/",
  },
  {
    name: "Titan Fitness",
    imageSrc: "/projects/titan-fitness.png",
    mobileImageSrc: "/projects/titan-mobile.png",
    imageAlt: "Titan Fitness project preview",
    liveUrl: "https://titan-fitness.2pixelcraft.com/",
  },
  {
    name: "Wistoan",
    imageSrc: "/projects/wistoan.png",
    mobileImageSrc: "/projects/wistoan-mobile.png",
    imageAlt: "Wistoan project preview",
    liveUrl: "https://wistoanwatches.com/",
  },
] as const;

interface Project {
  name: string;
  imageSrc: `/${string}.png` | `/${string}.svg`;
  mobileImageSrc?: `/${string}.png` | `/${string}.svg`;
  imageAlt: string;
  liveUrl: `https://${string}`;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${project.name} website`}
      className="group relative block h-full w-full overflow-hidden rounded-[28px] border border-white bg-white sm:border-gray-200"
    >
      {project.mobileImageSrc ? (
        <>
          <Image
            src={project.mobileImageSrc}
            alt={project.imageAlt}
            fill
            unoptimized
            sizes="100vw"
            className="object-contain sm:hidden"
          />
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            fill
            unoptimized
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 92vw, 1024px"
            className="hidden object-contain sm:block"
          />
        </>
      ) : (
        <Image
          src={project.imageSrc}
          alt={project.imageAlt}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 92vw, 1024px"
          className="object-contain"
        />
      )}
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-center font-unbounded font-bold text-4xl sm:text-5xl text-black">
          Featured{" "}
          <span className="bg-blue-500 text-white px-3 py-1 rounded">
            Projects
          </span>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto">
        <ScrollStack
          useWindowScroll={true}
          itemDistance={150}
          itemScale={0.05}
          itemStackDistance={30}
          stackPosition="10%"
          scaleEndPosition="5%"
          baseScale={0.88}
        >
          {projects.map((project) => (
            <ScrollStackItem
              key={project.name}
              itemClassName="!h-[20rem] sm:!h-[24rem] md:!h-[30rem] !rounded-[28px] !border-0 !bg-transparent !p-0 !shadow-none overflow-hidden"
            >
              <ProjectCard project={project} />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
