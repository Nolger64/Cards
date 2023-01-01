import img from "../assets/perfil.jpg";
const Card2 = () => {
  return (
    <div className="m-8">
      <div className="bg-slate-300 w-60 h-80 rounded-xl">
        <div className="w-full p-2 relative">
          <img src={img} className="w-44 rounded-full mx-auto relative" />
          <span className="absolute top-1 right-1 mt-6 mr-8 bg-green-600 rounded-xl p-1 text-sm text-white">
            On
          </span>
        </div>
        <h1 className="text-center text-2xl font-semibold mt-4">Nolger R</h1>
        <h6 className="text-center font-extralight text-sm">Usuario nuevo</h6>
        <div className="flex">
          <button className="w-1/2 p-2 rounded-xl text-white font-bold mx-auto mt-8 bg-blue-400">
            Seguir
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card2;
