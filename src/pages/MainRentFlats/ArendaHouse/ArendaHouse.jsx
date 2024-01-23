import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/NavBar/Navbar";
import styles from "./ArendaHouse.module.scss";
import arrowRight from "../../../assets/arrowRight.svg"
import { Link } from "react-router-dom";
import { URL_RENT_FLAT } from "../../../providers/constances";
import { POST_DATA } from "../../../providers/fetchData";
import { useState } from "react";

function InputBlock({placeholder, title, id, onChange}){
    return <div className={styles.InputBlock}>
        <div className={styles.subTitle}>
            {title}
        </div>
        <input onChange={onChange} id={id} type="text" className={styles.InputField} placeholder={placeholder} />
    </div>
}

export default function ArendaHouse(){

    const [FormData, setFormData] = useState({  
          
    })
    
    const handleFormData = (e) =>{
        const tempData = {...FormData}
        tempData[e.target.id] = e.target.value 
        setFormData(tempData)
      }

    const sendData = async () =>{
        await POST_DATA(FormData, URL_RENT_FLAT)        
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
                    Сдать жилье
                </div>
            </div>
            <div className="text-6xl mx-14">
                Сдать жилье
            </div>
            <div className={styles.service}>
                <div className="flex flex-row  gap-4 text-5xl">                    
                    <div className="text-5xl">
                       О сервисе 
                    </div>
                </div>                
                <div className="text-xl px-5 w-[1340px]">
                    Сервис предоставляет возможность владельцам недвижимости эффективно находить
                    надежных арендаторов для своего жилья. Этот сервис упрощает процесс поиска
                    и выбора арендаторов, обеспечивая безопасные и удобные сделки, а также минимизирует риски 
                    связанные с арендой недвижимости.
                </div>
            </div>
            <div className="grid grid-cols-2 my-10 mx-14">
                <div className="flex flex-col gap-3">
                    <div className="text-4xl">
                        Оставьте заявку
                    </div>
                    <div className="w-[60%]">
                        Для тех кто сдает собственную квартиру или ищет соседа
                        на подселение. После заполнения анкеты с Вами свяжется специалист,
                        которму Вы сможете отправить фотографии.
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <InputBlock onChange={handleFormData} id="name" title={"Имя"} placeholder={"Имя"} />
                    <InputBlock onChange={handleFormData} id="surname" title={"Фамилия"} placeholder={"Фамилия"} />
                    <InputBlock onChange={handleFormData} id="phone" title={"Номер телефона"} placeholder={"Номер телефона"} />
                    <InputBlock onChange={handleFormData} id="property" title={"Право на собственность"} placeholder={"Например, я собственник"} />
                    <InputBlock onChange={handleFormData} id="houseType" title={"Тип жилья"} placeholder={"Например, комната"} />
                    <InputBlock onChange={handleFormData} id="address" title={"Район и адрес жилья"} placeholder={"Район и адрес жилья"} />
                    <InputBlock onChange={handleFormData} id="cost" title={"Стоимость"} placeholder={"Стоимость"} />
                    <InputBlock onChange={handleFormData} id="extraInfo" title={"Дополнительная информация"} placeholder={"Дополнительная информация"} />
                    <div onClick={sendData} className="flex justify-center items-center bg-[#1E4391] w-max px-6 py-2 rounded-full text-white my-2 cursor-pointer">
                        Отправить
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}