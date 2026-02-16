import { UserIcon } from "lucide-react";
import Button from "./micro/buttons";
import myData from "../info/data";

function Presentation() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Hola, soy <span className="text-blue-600">{myData.name}</span>
          </h2>
          <p className="mb-6 text-gray-600 text-xl">{myData.description}</p>
          <div className="flex gap-4">
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              Ver Proyectos
            </Button>
            <Button className="bg-white text-blue-600 border border-blue-700 hover:bg-blue-700 hover:text-white">
              Descargar CV
            </Button>
          </div>
        </div>
        <div className="bg-blue-500 rounded-2xl p-9 text-center text-white bg-gradient-to-br from-blue-400 to-purple-600">
          <div className="w-32 h-32 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <UserIcon size={64} color="#2563eb" />
          </div>
          <p>{myData.role}</p>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
