import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import Image from "next/image";

const projects = [
  {
    name: "Lux",
    imageSrc: "/projects/lux.png",
    imageAlt: "Lux project preview",
    liveUrl: "https://luxe.2pixelcraft.com/",
  },
  {
    name: "Timect Watches",
    imageSrc: "/projects/timect.png",
    imageAlt: "Timect Watches project preview",
    liveUrl: "https://timectwatches.2pixelcraft.com/",
  },
  {
    name: "Titan Fitness",
    imageSrc: "/projects/titan-fitness.png",
    imageAlt: "Titan Fitness project preview",
    liveUrl: "https://titan-fitness.2pixelcraft.com/",
  },
  {
    name: "Wistoan",
    imageSrc: "/projects/wistoan.png",
    imageAlt: "Wistoan project preview",
    liveUrl: "https://wistoanwatches.com/",
  },
] as const;

interface Project {
  name: string;
  imageSrc: `/${string}.png`;
  imageAlt: string;
  liveUrl: `https://${string}`;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="h-full p-4 sm:p-6">
      <div className="flex h-full items-center justify-center rounded-[24px] border border-gray-200 bg-slate-50 p-3 md:p-4">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.name} website`}
          className="group relative block h-[17rem] w-full overflow-hidden rounded-[18px] border border-gray-300 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 md:h-[24rem]"
        >
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 960px"
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.01] md:p-3"
          />
        </a>
      </div>
    </div>
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
              itemClassName="bg-white border border-gray-200 !rounded-[28px] !h-[22rem] md:!h-[30rem]"
            >
              <ProjectCard project={project} />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
