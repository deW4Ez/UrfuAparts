import { Link } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import styles from "./Navbar.module.scss";
import logo from "../../assets/logo.svg"
import authLogo from "../../assets/AuthLogo.svg"

export default function Navbar(){
    return (
        <div className="flex flex-row justify-between text-black h-max w-screen text-[24px] p-[20px]">
            <div className="flex flex-row items-center pl-10">
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>                
            </div>
            <div className="flex flex-row items-center gap-48 px-10">
                <ul className={styles.navElem}>
                    <li>
                        <Link to="/dormitory">
                            Общежития 
                        </Link> 
                    </li>
                    <li>
                        <Link to="/rent_flats">
                            Платное жилье
                        </Link>                        
                    </li>
                    <li>
                        <Link to="/neighbour_start">
                            Поиск соседа
                        </Link>                        
                    </li>                
                </ul>
                <Link to="/auth">
                    <img src={authLogo} alt="AuthLogo" />
                </Link>
            </div>          
        </div>
    )
}