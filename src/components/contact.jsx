import { Linkedin, Github, Mail } from "lucide-react";
import Form from "./form";
import Button from "./micro/buttons";

function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-12">Contacto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-semibold text-xl mb-4">¡Hablemos!</h3>
            <p className="">
              ¿Tienes un proyecto en mente? ¿Necesitas ayuda con desarrollo web?
              ¡No dudes en contactarme!
            </p>
            <div className="flex gap-4 mt-6 items-center">
              <Mail color="#2563eb" size={20} />
              <span>lazarorodriguezleyva@gmail.com</span>
            </div>
            <div className="flex gap-4 mt-6">
              <Button
                className="flex items-center gap-3 bg-gray-800 text-white px-4 rounded hover:bg-gray-600 py-2"
                onClick={() => window.open("https://github.com/lrodriguez05")}
              >
                <Github size={16} />
                GitHub
              </Button>
              <Button
                className="flex items-center gap-3 bg-blue-600 text-white px-4 rounded hover:bg-blue-700 py-2"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/lazaro-rodriguez-leyva/",
                  )
                }
              >
                <Linkedin size={16} />
                LinkedIn
              </Button>
            </div>
          </div>
          <div className="flex">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
