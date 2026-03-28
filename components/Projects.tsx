
// import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
// import type { ReactNode } from "react";

// const projects = [
//   {
//     name: "Property Finder",
//     description: (
//       <>
//         Founded in 2007 and valued at{" "}
//         <span className="text-blue-500">$1 billion</span>, Property Finder is{" "}
//         <span className="text-blue-500">UAE&apos;s #1 property portal</span> with 100k+
//         verified properties.
//       </>
//     ),
//     tech: ["Figma", "React", "WordPress", "Python", "AWS", "Golang", "Node.js"],
//     teamSize: 18,
//     mockupBg: "from-purple-900 to-purple-700",
//     mockupLabel: "Property Portal Dashboard",
//     cardBg: "bg-white",
//   },
//   {
//     name: "NAHL",
//     description: (
//       <>
//         The official{" "}
//         <span className="text-blue-500">broadcasting platform</span> for the North
//         American Hockey League, with over 50k paid subscribers.
//       </>
//     ),
//     tech: ["React", "Node.js", "MySQL", "Python", "AWS", "Figma"],
//     teamSize: 12,
//     mockupBg: "from-blue-900 to-blue-700",
//     mockupLabel: "Live Streaming Dashboard",
//     cardBg: "bg-gray-50",
//   },
//   {
//     name: "Maestro",
//     description: (
//       <>
//         <span className="text-blue-500">Raised $15 million</span> in 2021, Maestro
//         helps creators make money on live streams with powerful interactive tools.
//       </>
//     ),
//     tech: ["Swift", "Roku", "JavaScript", "React", "Node.js"],
//     teamSize: 10,
//     mockupBg: "from-indigo-900 to-indigo-700",
//     mockupLabel: "Creator Live Stream Platform",
//     cardBg: "bg-white",
//   },
//   {
//     name: "Connected Cow",
//     description: (
//       <>
//         Cow{" "}
//         <span className="text-blue-500">management software</span> with over 100k+
//         cows registered and backed by the Government of India.
//       </>
//     ),
//     tech: ["C# / .NET", "MSSQL", "Azure", "Angular", "Figma"],
//     teamSize: 8,
//     mockupBg: "from-green-900 to-green-700",
//     mockupLabel: "Livestock Management System",
//     cardBg: "bg-gray-50",
//   },
// ];

// interface Project {
//   name: string;
//   description: ReactNode;
//   tech: string[];
//   teamSize: number;
//   mockupBg: string;
//   mockupLabel: string;
//   cardBg: string;
// }

// function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
//   return (
//     <div className={compact ? "p-6" : "p-6 sm:p-8 md:p-10"}>
//       <h3 className="font-unbounded font-bold text-2xl sm:text-3xl md:text-4xl text-black mb-3">
//         {project.name}
//       </h3>
//       <p className="font-poppins text-gray-600 text-base leading-relaxed mb-8 max-w-xl">
//         {project.description}
//       </p>

//       <div className="grid gap-6 md:grid-cols-2 md:gap-8 items-start">
//         <div
//           className={`bg-gradient-to-br ${project.mockupBg} rounded-2xl h-48 flex items-center justify-center shadow-lg`}
//         >
//           <div className="text-center">
//             <div className="w-12 h-12 bg-white/20 rounded-xl mx-auto mb-3 flex items-center justify-center">
//               <svg
//                 className="w-6 h-6 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={1.5}
//                   d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2"
//                 />
//               </svg>
//             </div>
//             <p className="text-white/70 text-xs font-poppins">{project.mockupLabel}</p>
//           </div>
//         </div>

//         <div>
//           <p className="font-poppins text-gray-500 text-sm font-semibold mb-3">Tech Stack :</p>
//           <div className="flex flex-wrap gap-2 mb-6">
//             {project.tech.map((tech) => (
//               <span
//                 key={tech}
//                 className="border border-gray-300 text-gray-700 text-xs font-poppins px-3 py-1.5 rounded-full"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//           <p className="font-poppins text-gray-500 text-sm font-semibold mb-2">Team size :</p>
//           <p className="font-unbounded font-bold text-black text-3xl">{project.teamSize}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Projects() {
//   return (
//     <section id="projects" className="bg-white py-20 px-6 lg:px-10">
//       <div className="max-w-5xl mx-auto">
//         {/* Title */}
//         <h2 className="text-center font-unbounded font-bold text-4xl sm:text-5xl text-black">
//           Featured{" "}
//           <span className="bg-blue-500 text-white px-3 py-1 rounded">
//             Projects
//           </span>
//         </h2>
//       </div>

//       <div className="max-w-5xl mx-auto">
//         <ScrollStack
//           useWindowScroll={true}
//           itemDistance={150}
//           itemScale={0.05}
//           itemStackDistance={30}
//           stackPosition="10%"
//           scaleEndPosition="5%"
//           baseScale={0.88}
//         >
//           {projects.map((project) => (
//             <ScrollStackItem
//               key={project.name}
//               itemClassName={`${project.cardBg} border border-gray-200 !rounded-2xl !h-auto`}
//             >
//               <ProjectCard project={project} />
//             </ScrollStackItem>
//           ))}
//         </ScrollStack>
//       </div>
//     </section>
//   );
// }