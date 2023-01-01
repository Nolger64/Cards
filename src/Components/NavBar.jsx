import { useState } from "react";
import { useScreen } from "../Hooks/useScreen";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const screen = useScreen();
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  console.log(screen.width);
  return (
    <div className="w-full h-20 flex justify-center items-center">
      {screen.width > 600 ? navBarScreen() : navBarMobile(handleOpen)}
    </div>
  );
};
const navBarMobile = (handleOpen) => {
  return (
    <div className="w-11/12 h-12 flex justify-between bg-slate-400 rounded-md">
      <div className="w-14 p-1 text-center rounded-l-md bg-slate-300">
        <span className="font-thin text-4xl">&</span>
      </div>
      <div className="flex cursor-pointer">
        <span className="bg-primary px-2 h-12 py-3"></span>
        <span className="bg-secondary px-2 h-12 py-3"></span>
        <span className="bg-tertiary px-2 h-12 py-3"></span>
        <span className="bg-quaternary px-2 h-12 py-3 rounded-r-md"></span>
      </div>
    </div>
  );
};
const navBarScreen = () => {
  return (
    <div className="w-11/12 h-12 flex justify-between bg-slate-400 rounded-md">
        <div className="w-20 p-1 text-center rounded-l-md bg-slate-300">
        <span className="font-thin text-4xl">&</span>
      </div>
      <div className="flex ">
        <span className="bg-primary text-white font-semibold px-2 h-12 py-3">
          Formularios
        </span>
        <span className="bg-secondary text-white font-semibold px-2 h-12 py-3">
          Botones
        </span>
        <span className="bg-tertiary text-white font-semibold px-2 h-12 py-3">
          Productos
        </span>
        <span className="bg-quaternary text-white font-semibold px-2 h-12 py-3 rounded-r-md">
          Usuarios
        </span>
      </div>
    </div>
  );
};
export default NavBar;
