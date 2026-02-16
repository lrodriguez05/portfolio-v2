import { Menu, UserIcon } from "lucide-react";

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4 ">
        <h1 className="text-black flex flex-row items-center gap-2 font-bold text-xl">
          <UserIcon color="blue" size={32} />
          Mi Portfolio
        </h1>
        <div className="hidden sm:flex flex-row gap-6 text-gray-600">
          <a href="#about-me">Sobre mi</a>
          <a href="#projects">Proyectos</a>
          <a href="#skills">Habilidades</a>
          <a href="#contact">Contacto</a>
        </div>
        <button className="sm:hidden py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition ease-in-out duration-150">
          <Menu color="black" size={24} />
        </button>
      </nav>
    </header>
  );
}

export default Header;
