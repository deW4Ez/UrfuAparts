import Footer from "../../../components/Footer/Footer"
import Navbar from "../../../components/NavBar/Navbar"
import styles from "./FindNeighbour.module.scss"
import { Link } from "react-router-dom"
import arrowRight from "../../../assets/arrowRight.svg"
import { useState } from "react"
import WatchAnket from "./WatchAnket/WatchAnket"
import FavoriteAnket from "./FavoriteAnket/FavoriteAnket"
import Anket from "./Anket/Anket"

export default function FindNeighbour(){

    const [section, setSection] = useState("watch")

    const handleSection = (e) =>{
        setSection(e.target.id)
    }

    return <div className={styles.container}>
        <div>
            <Navbar/>
            <div className={styles.MainContainer}>
                <div className={styles.NavLine}>
                    <Link to="/">
                        Главная
                    </Link>                
                    <img src={arrowRight} alt=">" />
                    <div className={styles.MainText}>
                        Поиск соседа
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <div className={styles.title}>
                        Поиск соседа
                    </div>
                    <div className="flex flex-row mx-16 mb-10 h-max">
                        <div id="watch" onClick={handleSection} 
                            className={(section === "watch"? "border-b-2 border-[#1E4391]" : "border-b-2 border-gray-500") + " px-5 py-2 cursor-pointer"}>
                            Просмотр анкет
                        </div>
                        <div id="favorite" onClick={handleSection} 
                            className={(section === "favorite"? "border-b-2 border-[#1E4391]" : "border-b-2 border-gray-500") + " px-5 py-2 cursor-pointer"}>
                            Избранное
                        </div>
                        <div id="anketa" onClick={handleSection} 
                            className={(section === "anketa"? "border-b-2 border-[#1E4391]" : "border-b-2 border-gray-500") + " px-5 py-2 cursor-pointer"}>
                            Моя анкета
                        </div>
                    </div>
                </div>
                <div className="mb-24">
                    {section === "watch"? <WatchAnket/>:
                    section === "favorite"? <FavoriteAnket/>:
                    <Anket/>}
                </div>            
            </div>
        </div>
        <Footer/>
    </div>
}