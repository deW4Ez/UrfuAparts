import { Link } from "react-router-dom"

export default function DescriptionSection({image, descript, title, link}){
    return <div className="flex flex-col items-center p-[0_10%]">
        {image? <img className="w-[200px] h-[200px]" src={image} alt='image'/> : <div>тест
            </div>}
        <div className="text-[26px]">
            {title}
        </div>
        <div className="text-[16px] text-center p-[10px_15px]">
            {descript}
        </div>
        <Link to={link}>
            <div className="p-[8px_32px] bg-[#1E4391] text-white rounded-[24px] text-[18px] cursor-pointer">
                Перейти
            </div>
        </Link>
        
    </div>
}