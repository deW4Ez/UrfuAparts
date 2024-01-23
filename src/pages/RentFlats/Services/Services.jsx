import styles from "./Services.module.scss"
import calendar from "./assets/calendar.svg"
import home from "./assets/home.svg"
import hammer from "./assets/hammer.svg"
import talk from "./assets/talk.svg"
import { useState } from "react"
import { POST_DATA } from "../../../providers/fetchData"
import { URL_RIELTOR } from "../../../providers/constances"

function ServiceCard({ind,image,text}){
    return <div className="flex flex-col items-center gap-4">
        <div className=" flex justify-center items-center text-white rounded-full bg-[#1E4391] w-6 h-6 p-5">
            {ind}
        </div>
        <div>
            <img src={image} alt="image" />
        </div>
        <div className="text-lg text-center w-80">
            {text}
        </div>
    </div>
}

function InputBlock({placeholder, title, id, onChange}){
    return <div className={styles.InputBlock}>
        <div className={styles.subTitle}>
            {title}
        </div>
        <input onChange={onChange} id={id} type="text" className={styles.InputField} placeholder={placeholder} />
    </div>
}

export default function Services(){

    const [FormData, setFormData] = useState({  
          
    })
    
    const handleFormData = (e) =>{
        const tempData = {...FormData}
        tempData[e.target.id] = e.target.value 
        setFormData(tempData)
      }

    const sendData = async () =>{
        await POST_DATA(FormData, URL_RIELTOR)        
    }

    const ServiceСardData = [
        {
            image: talk,
            text: "Подбор подходящего варианта исходя из предпочтений клиента"
        },
        {
            image: calendar,
            text: "Согласование встречи с собственником недвижимости"
        },
        {
            image: home,
            text: "Выезд на объект недвижимости совместно с клиентом"
        },
        {
            image: hammer,
            text: "Юридическое сопровождение на всех этапах заселения"
        }
    ]

    return <div className="flex flex-col mx-14 gap-20 my-10">
        <div className="flex flex-row w-screen items-center px-14 gap-10">
            <div className={styles.titleService}>
                О сервисе
            </div>
            <div className="flex text-2xl mx-20">
                С нашим информационным сервисом подачи заявок на услуги риелторов становится простым и удобным, обеспечивая беззаботный процесс поиска и аренды платного жилья. Найтие свой идеальный дом с легкостью и комфортом.
            </div>
        </div>
        <div className="flex flex-col gap-8 mx-10">
            <div className="text-4xl">
                Стоимость услуги
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-4xl">
                    7500₽*
                </div>
                <div className="text-xs">
                    *Оплата производится только в случае успешной сделки, по факту выполненных работ
                </div>          
            </div>
            <div className="flex justify-center items-center bg-[#1E4391] text-white w-max py-2 px-6 rounded-full cursor-pointer">
                Оставить заявку
            </div>
        </div>
        <div className="flex flex-col gap-5 mx-14">
            <div className="text-4xl">
                Что входит в услугу?
            </div>
            <div className="flex flex-row justify-between mx-10">
                {ServiceСardData.map((elem, ind) => <ServiceCard text={elem.text} image={elem.image} ind={ind+1} />)}
            </div>
        </div>
        <div className="grid grid-cols-2 mx-14">
            <div className="text-4xl">
                Оставьте заявку
            </div>
            <div className="flex flex-col gap-4">
                <InputBlock onChange={handleFormData} id="name" title="Имя" placeholder="Имя"/>
                <InputBlock onChange={handleFormData} id="surname" title="Фамилия" placeholder="Фамилия"/>
                <InputBlock onChange={handleFormData} id="phone" title="Номер телефона" placeholder="Номер телефона"/>
                <InputBlock onChange={handleFormData} id="houseType" title="Тип жилья" placeholder="Например, 2-к квартира"/>
                <InputBlock onChange={handleFormData} id="budget" title="Бюджет" placeholder="Например, 21 000 руб + к.у."/>
                <InputBlock onChange={handleFormData} id="studyPlace" title="Место учебы" placeholder="Например, УГИ"/>
                <InputBlock onChange={handleFormData} id="toDate" title="К какому сроку нужно жильё?" placeholder="Например, к 1 августа"/>
                <InputBlock onChange={handleFormData} id="period" title="На какой срок нужно жильё?" placeholder="Например, на учебный год"/>
                <div onClick={sendData} className="px-6 py-2 text-white bg-[#1E4391] w-max rounded-full cursor-pointer my-2">
                    Отправить
                </div>
            </div>
        </div>
    </div>
}