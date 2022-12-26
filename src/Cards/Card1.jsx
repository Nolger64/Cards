import img from "../assets/perfil.jpg";
import star from "../assets/star.png";
export const Card1 = () => {
  return (
    <div>
      <div className="bg-gray-700 w-fit h-40 m-2 rounded-xl flex font-mono shadow-2xl">
        <img
          className="h-40 w-50 img overflow-hidden rounded-l-xl"
          src={img}
          alt=""
        />
        <div className="p-2 flex flex-col">
          <h1 className="text-white text-2xl font-bold text-center mt-2">Nolger Rodriguez</h1>
          <span className="text-gray-500 text-sm text-center font-light my-1">23 años - 29/06/1999</span>
          <p className="text-gray-300 text-xl text-center mt-10">Web Development</p>
        </div>
      </div>
    </div>
  );
};
