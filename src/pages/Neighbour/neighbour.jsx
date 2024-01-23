import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavBar/Navbar";
import styles from "./neighbour.module.scss"
import arrowRight from "../../assets/arrowRight.svg"
import { Link } from "react-router-dom";

export default function Neighbour(){
    return <div className={styles.container}>
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
            <div className={styles.title}>
                Поиск соседа
            </div>
            <div className={styles.discribeBlock}>
                <div className={styles.discribe}>
                    <div className={styles.text}>
                        Наш сервис по поиску сожителя на сайте 
                        – это надежный помощник в поиске идеального сожителя. 
                        Вот несколько преимуществ, которые вы получите, используя наш сервис:     
                        <ul className={styles.list}>
                            <li>
                                Экономия времени и денег
                            </li>
                            <li>
                                Широкий выбор
                            </li>
                            <li>
                                Фильтры и поиск
                            </li>
                            <li>
                                Безопасность
                            </li>
                            <li>
                                Легкий контакт
                            </li>
                        </ul>                   
                    </div>
                    <Link to="/neighbour/form">
                        <div className={styles.button}>
                            Заполнить анкету
                        </div>
                    </Link>                    
                </div>
                <div className={styles.imageBlock}>
                    
                </div>
            </div>
        </div> 
        <Footer/>    
    </div>
}