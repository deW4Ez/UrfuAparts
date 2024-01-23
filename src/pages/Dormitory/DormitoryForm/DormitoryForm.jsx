import Footer from "../../../components/Footer/Footer"
import Navbar from "../../../components/NavBar/Navbar"
import { useState } from "react"
import styles from "./DomitoryForm.module.scss"
import { Link } from "react-router-dom"
import { URL_TECH_SPEC } from "../../../providers/constances"
import { POST_DATA } from "../../../providers/fetchData"

function InputBlock({placeholder, title, id, onChange}){
    return <div className={styles.InputBlock}>
        <div className={styles.subTitle}>
            {title}
        </div>
        <input onChange={onChange} id={id} type="text" className={styles.InputField} placeholder={placeholder} />
    </div>
  }

export default function DormitoryForm(){

    const [FormData,setFormData] = useState({
        name:"",
        room:"",
        problem:"",
        worker: ""
    })

    const handleFormData = (e) =>{
      const tempData = {...FormData}
      tempData[e.target.id] = e.target.value 
      setFormData(tempData)
    }

    const sendData = async () =>{
       await POST_DATA(FormData, URL_TECH_SPEC) 
    }

    return <div className="flex flex-col h-screen w-screen justify-between">
        <Navbar/>
        <div className="flex flex-row justify-center items-center gap-5">
            <div className="text-6xl mb-20 w-[500px] text-center">
                Форма для вызова технического специалиста
            </div>
            <div className="flex flex-col gap-5 items-center">
                <select name="worker" id="worker"                
                    onChange={handleFormData}
                    className="bg-white border py-1 px-2 border-gray-500 rounded-3xl w-80"
                >                        
                    <option value="Электрик" selected>Электрик</option>
                    <option value="Сантехник">Сантехник</option>
                    <option value="Плотник">Плотник</option>
                    <option value="Дезинсектор">Дезинсектор</option>
                </select>
                <InputBlock title={"Имя"} id={"name"} placeholder={"Имя"} onChange={handleFormData} />
                <InputBlock title={"Комната"} id={"room"} placeholder={"Номер комнаты"} onChange={handleFormData} />
                <InputBlock title={"Какая у вас проблема?"} id={"problem"} placeholder={"Опишите свою проблему"} onChange={handleFormData} />                
                <Link to="/dormitory">
                    <div onClick={sendData} className="text-white text-[18px] bg-[#1E4391] rounded-[24px] p-[8px_32px] w-max cursor-pointer">
                        Отправить
                    </div>
                </Link>
            </div>            
        </div>
        <Footer/>
    </div>
}