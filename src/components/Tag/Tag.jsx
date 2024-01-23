export default function Tag({title}){
    return <div className="flex justify-center items-center border border-black rounded-full w-max px-2 py-1 flex-nowrap">
        <div className="text-nowrap">
            {title}
        </div>
    </div>
}