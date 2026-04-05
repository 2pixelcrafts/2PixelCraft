import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import Image from "next/image";

const projects = [
  {
    name: "Lux",
    imageSrc: "/projects/lux.jpg",
    mobileImageSrc: "/projects/lux-mobile.jpg",
    imageAlt: "Lux luxury brand website designed and developed by 2PixelCraft",
    liveUrl: "https://luxe.2pixelcraft.com/",
  },
  {
    name: "Radhika",
    imageSrc: "/projects/radhika.jpg",
    mobileImageSrc: "/projects/radhika-mobile.jpg",
    imageAlt: "Radhika website designed and developed by 2PixelCraft",
  },
  {
    name: "Timect Watches",
    imageSrc: "/projects/timect.jpg",
    mobileImageSrc: "/projects/timect-mobile.jpg",
    imageAlt: "Timect Watches e-commerce website designed and developed by 2PixelCraft",
    liveUrl: "https://timectwatches.2pixelcraft.com/",
  },
  {
    name: "Titan Fitness",
    imageSrc: "/projects/titan-fitness.jpg",
    mobileImageSrc: "/projects/titan-mobile.jpg",
    imageAlt: "Titan Fitness gym website designed and developed by 2PixelCraft",
    liveUrl: "https://titan-fitness.2pixelcraft.com/",
  },
  {
    name: "Wistoan",
    imageSrc: "/projects/wistoan.jpg",
    mobileImageSrc: "/projects/wistoan-mobile.jpg",
    imageAlt: "Wistoan luxury watches website designed and developed by 2PixelCraft",
    liveUrl: "https://wistoanwatches.com/",
  },
] as const;

interface Project {
  name: string;
  imageSrc: `/${string}.jpg` | `/${string}.png` | `/${string}.svg`;
  mobileImageSrc?: `/${string}.jpg` | `/${string}.png` | `/${string}.svg`;
  imageAlt: string;
  liveUrl?: `https://${string}`;
}

function ProjectCard({
  project,
  mobile = false,
}: {
  project: Project;
  mobile?: boolean;
}) {
  const src = mobile && project.mobileImageSrc ? project.mobileImageSrc : project.imageSrc;
  const imageProps =
    mobile && project.mobileImageSrc
      ? {
          sizes: "(max-width: 639px) calc(100vw - 3rem), 100vw",
        }
      : {
          sizes: "(max-width: 1280px) 92vw, 1024px",
        };
  const imageClassName = "object-contain";

  const imageElement = (
    <Image
      src={src}
      alt={project.imageAlt}
      fill
      {...imageProps}
      className={imageClassName}
    />
  );

  const containerClassName = "group relative block h-full w-full overflow-hidden rounded-[28px] border border-white bg-white sm:border-gray-200";

  if (project.liveUrl) {
    return (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.name} website`}
        className={containerClassName}
      >
        {imageElement}
      </a>
    );
  }

  return (
    <div className={containerClassName}>
      {imageElement}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center font-unbounded font-bold text-4xl sm:text-5xl text-black">
          Featured{" "}
          <span className="bg-blue-500 text-white px-3 py-1 rounded">
            Projects
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center font-poppins text-base leading-relaxed text-gray-600 sm:text-lg">
          A selection of websites and digital products 2PixelCraft has designed and built for growing businesses.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-md sm:hidden">
        <ScrollStack
          useWindowScroll={true}
          itemDistance={180}
          itemScale={0}
          itemStackDistance={0}
          stackPosition="10%"
          scaleEndPosition="10%"
          baseScale={1}
        >
          {projects.map((project) => (
            <ScrollStackItem
              key={project.name}
              itemClassName="!h-[22rem] !rounded-[28px] !border-0 !bg-transparent !p-0 !shadow-none overflow-hidden"
            >
              <ProjectCard project={project} mobile />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>

      <div className="hidden max-w-5xl mx-auto sm:block">
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
