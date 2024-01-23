import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/NavBar/Navbar";
import { Link } from "react-router-dom";
import arrowRight from "../../../assets/arrowRight.svg"
import styles from "./BuyFlats.module.scss"
import { URL_BUY_FLAT } from "../../../providers/constances";
import { POST_DATA } from "../../../providers/fetchData";
import { useState } from "react";

function InputBlock({placeholder, title, id, onChange}){
    return <div className={styles.InputBlock}>
        <div className={styles.subTitle}>
            {title}
        </div>
        <input id={id} onChange={onChange} type="text" className={styles.InputField} placeholder={placeholder} />
    </div>
}


export default function BuyFlats(){

    const [FormData, setFormData] = useState({  
          
    })
    
    const handleFormData = (e) =>{
        const tempData = {...FormData}
        tempData[e.target.id] = e.target.value 
        setFormData(tempData)
      }

    const sendData = async () =>{
        await POST_DATA(FormData, URL_BUY_FLAT)        
    }

    return <div className="flex flex-col h-screen justify-between">
        <Navbar/>
        <div className={styles.MainContainer}>
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
                    Купить жилье
                </div>
            </div>
            <div className="text-6xl mx-14">
                Купить жилье
            </div>
            <div className={styles.service}>
                <div className="flex flex-row  gap-4 text-5xl">                    
                    <div className="text-5xl">
                       О сервисе 
                    </div>
                </div>                
                <div className="text-xl px-5 w-[1340px]">
                    Сервис помогает людям найти и приобрести идеальное жилье через проверенных
                    риэлторов. Мы предоставляем удобный и надежный способ для покупки жилья, обеспечивая клиентам поддержку
                    и консультации на каждом этапе сделки
                </div>
            </div>
            <div className="grid grid-cols-2 my-10 mx-14">
                <div className="flex flex-col gap-3">
                    <div className="text-4xl">
                        Оставьте заявку
                    </div>
                    <div className="w-[60%]">
                        Наши специалисты готовы оказать услуги по покупки недвижимости.
                    </div>
                    <div className="w-[60%]">
                        Любые виды сделок с привлечением ипотечного кредитования, материнского капитала, военной ипотеки. 
                        Сопровождение сделки от подачи заявки до получения заветной квартиры в собственность. 
                    </div>
                    <div className="w-[60%]">
                        Каждая сделка индивидуальеая, предлагаем заполнить заявку и специалист свяжется с Вами.
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <InputBlock onChange={handleFormData} id={"name"} title={"ФИО"} placeholder={"ФИО"} />
                    <InputBlock onChange={handleFormData} id={"phone"} title={"Номер телефона"} placeholder={"Номер телефона"} />
                    <InputBlock onChange={handleFormData} id={"appeal"} title={"Суть обращения"} placeholder={"Суть обращения"} />                    
                    <div onClick={sendData} className="flex justify-center items-center bg-[#1E4391] w-max px-6 py-2 rounded-full text-white my-2 cursor-pointer">
                        Отправить
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}