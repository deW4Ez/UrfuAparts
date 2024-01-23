import Footer from "../../../components/Footer/Footer"
import styles from "./ApartsForm.module.scss"
import { Link } from "react-router-dom"
import arrowRight from "../../../assets/arrowRight.svg"
import Navbar from "../../../components/NavBar/Navbar"
import { useState} from "react"
import FormPageOne from "./pageOne/FormPageOne"
import FormPageTwo from "./pageTwo/FormPageTwo"
import DefButton from "../../../components/defButton/defButton"
import FormPageTwoAps from "./pageTwoAparts/FormPageTwoAps"
import { PUT_DATA } from "../../../providers/fetchData"
import { URL_MY_ANKETA } from "../../../providers/constances"


export default function ApartsForm(){

    const [FormData, setFormData] = useState({  
          
    })
    
    const changeFormData = (key, value) => {
        const tempData ={...FormData}
        tempData[key] = value
        setFormData(tempData)        
    }
    
    const changeFormDataNextPage = (key, value) =>{
        const tempData = {...FormData.pageTwo}
        tempData[key] = value
        changeFormData("pageTwo", tempData)
    }

    const [currentPage, setCurrentPage] = useState(1)     

    const changeNextPage = () => {
        setCurrentPage(currentPage+1)        
    }

    const changePrevPage = () => {
        setCurrentPage(currentPage-1)
    }

    const ToMainPage = async () =>{
        await PUT_DATA(FormData, URL_MY_ANKETA)       
    }

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
                    Заполнение анкеты
                </div> 
                <div className={styles.FormPage}>
                    {currentPage === 1? <FormPageOne changeFormData={changeFormData} /> : 
                    FormData.neighbour === "Нет"? <FormPageTwo changeFormData={changeFormData} /> : <FormPageTwoAps changeFormData={changeFormData} />}
                    <div className="flex flex-row gap-5 items-center">
                        <DefButton onClick={changePrevPage} value="Назад" view={currentPage === 1? "disabled": "default"}/>
                        <div className={currentPage === 2 ? "mt-3.5 w-3 h-3 rounded-full bg-gray-500" : "bg-[#1E4391] mt-3.5 w-3 h-3 rounded-full"}></div>
                        <div className={currentPage === 1 ? "mt-3.5 w-3 h-3 rounded-full bg-gray-500" : "bg-[#1E4391] mt-3.5 w-3 h-3 rounded-full"}></div >
                        {currentPage === 1 ? <DefButton onClick={changeNextPage} value="Далее" view="blue"/>: 
                        <Link to="/neighbour">
                            <div onClick={ToMainPage} className="bg-[#1E4391] mt-3 px-6 py-2 rounded-full text-white">
                                Закончить
                            </div>
                        </Link>}
                    </div>
                </div>                             
            </div>           
        <Footer/>    
    </div>

}