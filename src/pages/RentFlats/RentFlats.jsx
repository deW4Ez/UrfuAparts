import Navbar from "../../components/NavBar/Navbar"
import Footer from "../../components/Footer/Footer"
import styles from "./RentFlats.module.scss"
import arrowRight from "../../assets/arrowRight.svg"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Services from "./Services/Services"
import Posts from "./Posts/Posts"
import { URL_POSTS } from "../../providers/constances"


export default function RentFlats(){

    const [extraSection, setExtraSection] = useState("advert") 
    const [dataPost, setDataPost] = useState({
        data:{},
        isLoading: true
    })

    const handleExtraSection = (e) => {
        setExtraSection(e.target.id)        
    }

    useEffect(() =>{
        try{            
            fetch(URL_POSTS).then(response => response.json()).then((data) =>{
            setDataPost({
                data,
                isLoading: false              
            })
        })} catch (error){
            console.log(error)
        }
    },[])
    
    return <div className="flex flex-col h-screen justify-between">
        <Navbar/>
        <div className={styles.container}>
            <div className={styles.NavLine}>
                <Link to="/">
                    Главная
                </Link>                
                <img src={arrowRight} alt=">" />
                <Link to="/rent_flats">
                    Платное жилье
                </Link>
                <img src={arrowRight} alt=">" />
                <div className={styles.MainText}>
                    Снять жилье
                </div>
            </div>
            <div className={styles.postBlock}>
                <div className="flex flex-row mx-16 mb-10 ">
                    <div id="advert" onClick={handleExtraSection} 
                        className={(extraSection === "advert"? "border-b-2 border-[#1E4391]" : "border-b-2 border-gray-500") + " px-5 py-2 cursor-pointer"}>
                        Просмотр объявлений
                    </div>
                    <div id="realtor" onClick={handleExtraSection} 
                        className={(extraSection === "realtor"? "border-b-2 border-[#1E4391]" : "border-b-2 border-gray-500") + " px-5 py-2 cursor-pointer"}>
                        Услуги риелтора
                    </div>                    
                </div>
                {
                    extraSection === "advert"? <Posts dataPost={dataPost}/> : <Services/>
                }              
            </div>
        </div>
        <Footer/>
    </div>
}