import useTime from "../../Hooks/useTime";
const Hours1 = () => {
    const time = useTime()
    return(
        <div className="m-8">
            <div className="bg-slate-700 flex p-2 rounded-xl shadow-xl">
                <h1 className="text-4xl font-bold text-white px-2 font-mono">{time}</h1>
            </div>
        </div>
    )
}
export default (Hours1)