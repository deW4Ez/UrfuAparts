import logo from "../../assets/logo_white.svg"
import { Link } from "react-router-dom"

export default function Footer(){
    return <div className="flex flex-row justify-between bg-[#1E4391] h-[270px] w-screen p-[60px] text-white">
        <div className="flex flex-col gap-[25px]">
            <img src={logo} alt="logo"/>
            <div className="text-[10px]">©ФГАОУ ВО «УрФУ имени первого Президента России Б.Н. Ельцина»</div>
        </div>
        <div className="mr-[30px]">
            <ul className="flex flex-col gap-[5px]">
                <li>
                    <Link to="/dormitory">Общежития</Link>
                </li>
                <li>
                    <Link>Платное жилье</Link> 
                </li>
                <li>
                    <Link>Поиск соседа</Link>
                </li>
            </ul>
        </div>
    </div>
}