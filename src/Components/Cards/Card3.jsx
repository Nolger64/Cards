import img from "../assets/Orange.jpg";
const Card3 = () => {
  return (
    <div>
      <div className="bg-orange-400 w-80 h-96 m-8 rounded-xl">
        <div>
          <img src={img} className="w-80 rounded-t-xl" />
        </div>
        <div className="p-2">
          <h1 className="text-2xl font-bold text-white">Orange</h1>
          <p className="text-sm font-extralight text-orange-800">
            Orange is the color of the orange fruit.
          </p>
        </div>
        <div className="flex justify-end mt-5 mr-2">
          <button className="p-2 bg-white rounded-xl text-orange-400 font-bold">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card3;
