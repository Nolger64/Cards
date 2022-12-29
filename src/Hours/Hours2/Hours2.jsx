import useTime from "../../Hooks/useTime"
const Hours2 = () => {
    const time = useTime()
    return(
        <div className="m-8 bg-red-400 p-2 rounded-md">
            <div className="text-white text-4xl font-bold font-mono">{time.substring(0, 2)}</div>
            <div className="text-white text-4xl font-bold font-mono">{time.substring(3, 5)}</div>
            <div className="text-white text-4xl font-bold font-mono">{time.substring(6, 8)}</div>
        </div>
    )
}
export default (Hours2)