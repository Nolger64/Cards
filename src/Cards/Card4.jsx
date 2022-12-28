import img from '../assets/JuiceOrange.jpg'
const Card4 = () => {
 return (
    <div className='m-8'>
        <div className='bg-orange-400 w-96 rounded-xl flex'>
            <img src={img} className="w-52 rounded-l-2xl" />
            <div className='p-4 w-48'>
                <h1 className='text-center text-2xl font-bold text-white mb-3'>Orange</h1>
                <span className='text-sm text-orange-900 font-light'>Cada vez que se hace referencia al jugo de naranja no podemos dejar de imaginar un delicioso desayuno para empezar el día con toda la energía posible. </span>
                <div className='flex justify-center mt-2'>
                    <button className='p-2 bg-white rounded-xl text-orange-400 font-bold mt-4'>Comprar</button>
                </div>
            </div>
        </div>
    </div>
 )
}
export default (Card4)