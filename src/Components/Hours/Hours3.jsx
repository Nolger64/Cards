import useTime from "../Hooks/useTime"
const Hours3 = () => {
    const time = useTime()
    return(
        <div className="m-8 bg-blue-400 w-40 h-40 flex justify-center items-center rounded-full flex-col shadow-2xl">
            <div className="text-6xl font-mono font-bold text-white">{time.substring(0,2)}</div>
            <div className="text-4xl font-mono font-bold text-white">{time.substring(3,5)}</div>
        </div>
    )
}
export default (Hours3)