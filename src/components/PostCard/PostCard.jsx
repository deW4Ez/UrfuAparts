export default function PostCard({text, image}){

    return <div className="grid grid-flow-row gap-5">
        <div className="flex justify-center h-max">
            <div className="w-[500px]">
                {text}
            </div>
        </div>        
        <div className="flex justify-center">
            <img className="max-w-[500px] max-h-[500px]" src={image} alt="img" />
        </div>
    </div>
}