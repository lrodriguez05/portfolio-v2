import myData from "../info/data";
import SkillCard from "./micro/skill-card";

function Skills() {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-12">Habilidades</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {myData.skills.map((skill, index) => (
            <SkillCard
              key={index}
              bgColor={skill.bgColor}
              name={skill.name}
              percentage={skill.percentage}
              color={skill.color}
              icon={skill.icon}
              iconPosition={skill.iconPosition}
              description={skill.description}
              rowPosition={skill.rowPosition}
              colPosition={skill.colPosition}
              borderColor={skill.borderColor}
              border={skill.border}
              progressColor={skill.progressColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
