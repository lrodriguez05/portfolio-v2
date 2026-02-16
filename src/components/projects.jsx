import myData from "../info/data";
import ProjectCard from "./micro/project-card";

function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-12">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myData.projectsCards.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              social={project.social}
              rowPosition={project.rowPosition}
              colPosition={project.colPosition}
              Icon={project.Icon}
              bgHeight={project.bgHeight}
              bgFrom={project.bgFrom}
              bgTo={project.bgTo}
              bgColor={project.bgColor}
              gradientDir={project.gradientDir}
              IconSize={project.IconSize}
              colCondition={project.colCondition}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
