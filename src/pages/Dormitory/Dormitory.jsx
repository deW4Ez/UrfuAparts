import Navbar from "../../components/NavBar/Navbar"
import Footer from "../../components/Footer/Footer"
import DormitoryInfo from "../../components/DormitoryInfo/DormitoryInfo"
import ImageButton from "../../components/ImageButton/ImageButton"
import { useState } from "react"
import styles from "./Dormitory.module.scss"
import { Link } from "react-router-dom"
import arrowRight from "../../assets/arrowRight.svg"
import data from "./data.json"
import dataUrl from "./dataUrl.json"
import alertCircle from "../../assets/alert-circle.svg"

export default function Dormitory(){

    const [extraSection, setExtraSection] = useState("orgQuest")

    const handleExtraSection = (e) => {
        setExtraSection(e.target.id)        
    }

    const [dataButtons, setDataButtons] = useState([
        {
            title:"Платежи",
            description: "Об оплате проживания в общежитии"
        },
        {
            title:"Пожарная безопасность",
            description: "О правилах поведения при пожаре"
        },
        {
            title:"Медосмотр",
            description: "О прохождении медобследования"
        },
        {
            title:"Правила проживания",
            description: "О правилах проживания в общежитии"
        }
    ])

    const dataExtraSections ={
        orgQuest:[
                {
                    title:"Заселение",
                    description:"О порядке процесса заселения",
                    link:""
                },
                {
                    title:"Выселение",
                    description:"О порядке процесса выселения",
                    link:""
                },
                {
                    title:"Что делать, если",
                    description:"Действия при утрате ключа, ордера",
                    link:""
                }            
            ]            
        ,
        guide:[
            {
                title:"ССК",
                description:"О порядке процесса заселения",
                link:""
            },
            {
                title:"Староста этажей",
                description:"О порядке процесса заселения",
                link:""
            },
        ],
        houseQuest:[
            {
                title:"Запись к техспециалистам",
                link:"/dormitory/form"                
            },
            {
                title:"Бронирование стиральных машин",
                link:""               
            },
        ]
    }

    const [currentDom, setCurrentDom] = useState("№")

    const handleDom = (e) => {
        setCurrentDom(e.target.value)        
    }

    const dataKeys = Object.keys(data)

    return <div className="bg-white text-black w-screen">
        <Navbar/>
        <div className={styles.NavLine}>
            <Link to="/">
                Главная
            </Link>                
            <img src={arrowRight} alt=">" />
            <div className={styles.MainText}>
                Общежитие
            </div>
        </div>
        <div className="flex flex-row gap-5 ml-[4vw] items-center">
            <div className="text-6xl my-2">
                Общежитие
            </div>
            <select className="bg-white border mt-2 py-1 px-2 border-gray-500 rounded-3xl w-18" 
                name="numberDorm" id="numberDorm" value={currentDom} onChange={handleDom}>
                {
                    dataKeys.map((elem) =>{
                        return <option value={elem}>{elem}</option>
                    })
                }
            </select>
        </div>
        <div className="grid grid-cols-2 p-[30px_100px] gap-x-[30px]">
            {data[currentDom].map((elem) => <div> 
                <DormitoryInfo name={elem.name} grade={elem.grade} contacts={elem.contacts} />
            </div>)}
            {currentDom !== "№" && <div className="flex flex-col gap-5 my-10">
                <div className="text-2xl">
                    Общежитие располагается по адресу: {dataUrl[currentDom].adress}
                </div>
                <div className="border-b-2 px-2 border-black w-max cursor-pointer">
                    Посмотреть на карте
                </div>
                <div className="flex flex-row items-center w-full justify-between">
                    <div className="flex flex-col gap-3">
                        <div className="text-2xl text-nowrap ">
                            Важные ссылки
                        </div>
                        <Link to={dataUrl[currentDom].group}>
                            <div className="border-b-2 px-2 border-black w-max cursor-pointer">
                                Группа ВК
                            </div>
                        </Link>                        
                        <div className="border-b-2 px-2 border-black w-max cursor-pointer">
                            Беседа ВК
                        </div>
                    </div>
                    <div className="flex flex-row text-balance w-96 px-4 py-2 gap-4 bg-[#1E4391] rounded-2xl text-white h-max">
                        <img src={alertCircle} alt="alert" />
                        <div>Если вы ищите соседа то можете воспользоваться нашим сервисом "Поиск соседа"</div>
                    </div>
                </div>
            </div>}
        </div>
        <div>
        {currentDom !== "№" && <div className="flex flex-col my-5">
                <div className="flex flex-row mx-16 mb-10 ">
                    <div id="orgQuest" onClick={handleExtraSection} 
                        className={(extraSection === "orgQuest"? "border-b-2 border-[#1E4391]" : "border-b-2 border-gray-500") + " px-5 py-2 cursor-pointer"}>
                        Организационные вопросы
                    </div>
                    <div id="guide" onClick={handleExtraSection} 
                        className={(extraSection === "guide"? "border-b-2 border-[#1E4391]" : "border-b-2 border-gray-500") + " px-5 py-2 cursor-pointer"}>
                        Руководство
                    </div>
                    <div id="houseQuest" onClick={handleExtraSection} 
                        className={(extraSection === "houseQuest"? "border-b-2 border-[#1E4391]" : "border-b-2 border-gray-500") + " px-5 py-2 cursor-pointer"}>
                        Бытовые вопросы
                    </div>
                </div>
                <div className="grid grid-cols-4 ml-16 w-full mb-5">
                    {
                        dataExtraSections[extraSection].map((elem) => {
                            return <ImageButton link={elem.link} title={elem.title} description={elem.description}/>
                        })
                    }
                </div>
            </div>}
            <div>
                <div className="text-[42px] ml-[4vw] mb-[4vh]">
                    Основные разделы
                </div>
                <div className="grid grid-cols-4 ml-16 w-full mb-[5vh]">
                    {dataButtons.map((elem) => {return <ImageButton title={elem.title} description={elem.description}/>})}
                </div>
            </div>
            
        </div>
        <Footer/>
    </div>
}