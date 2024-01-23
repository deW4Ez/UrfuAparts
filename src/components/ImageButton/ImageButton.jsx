import { Link } from "react-router-dom"

export default function ImageButton({title, description, link=""}){
    return <Link to={link}>
            <div className="flex flex-col-reverse p-[30px] cursor-pointer text-white text-left bg-[#1E4391] w-[415px] h-[253px] rounded-[32px]">
            {description && <div className="text-[16px]">
                {description}
            </div>}
            <div className="text-[26px]">
                {title}
            </div>
        </div>
    </Link>
    
    
    
}