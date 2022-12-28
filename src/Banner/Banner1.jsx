import img from "../assets/perfil.jpg";
const Banner1 = () => {
  return (
    <div className="m-8">
      <div className="h-80 bg-slate-300 p-2 flex items-center flex-nowrap overflow-x-scroll">
        <Users />
        <Users />
        <Users />
        <Users />
      </div>
    </div>
  );
};
const Users = () => {
  return (
    <div className="bg-slate-500 pt-2 px-4 w-52 h-72 flex flex-col items-center rounded-md mx-2 whitespace-nowrap">
      <div className="relative">
        <img src={img} className="w-40 rounded-full relative" />
        <span className="absolute top-1 right-4 text-white font-bold bg-green-500 px-1 rounded-full">
          On
        </span>
      </div>
      <h1 className="text-white font-semibold text-2xl">Nolger R</h1>
      <div>
        <button className="bg-blue-400 my-2 p-2 rounded-xl text-white mx-1 font-bold">
          Seguir
        </button>
        <button className="bg-slate-400 my-2 p-2 rounded-xl text-white mx-1 font-light">
            Ignorar
        </button>
      </div>
    </div>
  );
};
export default Banner1;
