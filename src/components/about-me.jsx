import { Code, UserIcon } from "lucide-react";
import AboutCard from "./micro/about-card";
import myData from "../info/data";

function AboutMe() {
  return (
    <section id="about-me" className="py-16 bg-white">
      <h2 className="text-3xl text-center font-bold mb-12">Sobre mi</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-6xl mx-auto px-6">
        {myData.aboutMe.map((item, index) => (
          <AboutCard
            key={index}
            title={item.title}
            description={item.description}
            Icon={item.Icon}
            iconColor={item.colorIcon}
            bgIcon={item.bgIcon}
          />
        ))}
      </div>
    </section>
  );
}

export default AboutMe;
