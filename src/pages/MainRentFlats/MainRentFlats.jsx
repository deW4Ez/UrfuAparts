import styles from "./MainRentFlats.module.scss"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/NavBar/Navbar"
import { Link } from "react-router-dom"
import arrowRight from "../../assets/arrowRight.svg"
import ImageButton from "../../components/ImageButton/ImageButton"
import alertCircle from "../../assets/alert-circle-gray.svg"
import search from "./assets/search.svg"
import like from "./assets/like.svg"
import document from "./assets/document.svg"
import DormitoryInfo from "../../components/DormitoryInfo/DormitoryInfo"


export default function MainRentFlats(){

    const rieltorButtons = [
        {
            title: "Частные общежития",
            description: "Хотите найти общежитие? заполните анкету и наши риелторы помогут вам найти жилье со всеми удобствами и заселением",
            link:"/rent_flats/private_domitory"
        },
        {
            title: "Снять жилье",
            description: "Ищете дом, который станет ваc уютным? Заполните анкету и наши риелторы свяжутся с вами, чтобы помочь найти и выбрать идеальное жилье для вас",
            link:"/rent_flats/rent_house"
        },
        {
            title:"Сдать жилье",
            description: "Хотите сдать свое жилье? Заполните анкету и наши риелторы возьмут на себя задачу найти достойных арендаторов для вашей недвижимости",
            link:"/rent_flats/to_rent_flats"
        },
        {
            title:"Купить жилье",
            description: "В поиске своего идеального дома? Заполните анкету и наши риелторы смогут помочь в выборе, оформлении и покупке вашей мечты",
            link:"/rent_flats/buy_flats"
        }
    ]

    const dataTeam = [
        {
            name: "Михаил Зверев",
            grade:"Руководитель",
            contacts:["(343) 375-45-32", "A.E.Chobanyan@urfu.me"]
        },
        {
            name: "Полина Бондарева",
            grade:"Специалист по работе с частными общежитиями",
            contacts:["(343) 375-45-32", "A.E.Chobanyan@urfu.me"]
        },
        {
            name: "Данил Злобин",
            grade:"Специалист по работе с собственниками",
            contacts:["(343) 375-45-32", "A.E.Chobanyan@urfu.me"]
        },
        {
            name: "Александр Козин",
            grade:"Специалист по работе с частными общежитиями",
            contacts:["(343) 375-45-32", "A.E.Chobanyan@urfu.me"]
        }
    ]
    
    return <div className={styles.container}>
        <Navbar/>
        <div className={styles.MainContainer}>
            <div className={styles.NavLine}>
                <Link to="/">
                    Главная
                </Link>                
                <img src={arrowRight} alt=">" />
                <div className={styles.MainText}>
                    Платное жилье
                </div>
            </div>
            <div className={styles.title}>
                Платное жилье
            </div>
            <div className={styles.service}>
                <div className="flex flex-row items-center gap-4 text-5xl">
                    <div>
                        О  
                    </div>
                    <div className="text-5xl text-nowrap">
                        сервисе 
                    </div>
                </div>
                
                <div className="text-2xl px-5 w-[1340px]">
                    Проектный офис Союза студентов УрФУ "Платное жилье" - место, где помогают с поиском жилья. С 2011 года находим студентам комнаты, квартиры и частные общежития.
                </div>
            </div>
            <div className="flex flex-col mx-14 mt-20 gap-10">
                <div className="text-4xl">
                    Риелторские услуги
                </div>
                <div className="grid grid-cols-4">
                    {rieltorButtons.map( (elem) =>  <ImageButton title={elem.title} description={elem.description} link={elem.link}/>)}                    
                </div>
            </div>
            <div className="flex flex-col px-14 my-5 gap-5">
                <div className="text-4xl">
                    Бесплатные консультации
                </div>
                <div className="flex flex-row w-full justify-between">
                    <div className="text-2xl w-[990px]">
                        Необязательно обращаться к риелтору. Можно бесплатно проконсультироваться в Платное Жилье - написать в ЛС группы или руководителю
                    </div>
                    <div className="flex flex-row items-center h-max gap-5 border border-solid border-gray-500 rounded-2xl px-5 py-3">
                        <img src={alertCircle} alt="!" />
                        <div className="w-96">
                            Напоминаем, что для получения консультации необходимо быть членом профсоюза.
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-14 my-10">
                    <div className="text-2xl">
                        Приходи на консультацию с вариантами съемного жилья:
                    </div>
                    <div className="flex flex-row justify-between mx-[15%]">
                        <div className="flex flex-col w-60 items-center text-center gap-5">                            
                            <div className="w-30" >
                                <img className="w-30" src={like} alt="like" />
                            </div>
                            <div className="text-xl">
                                Специалисты помогут определиться с наилучшим вариантом
                            </div>
                        </div>
                        <div className="flex flex-col w-60 items-center text-center gap-5">
                            <div className="w-30" >
                                <img className="w-30" src={search} alt="search" />
                            </div>                             
                            <div className="text-xl">
                                Расскажут, на какие факторы необходимо обращать внимание
                            </div>
                        </div>
                        <div className="flex flex-col w-60 items-center text-center gap-5">
                            <div className="w-30" >
                                <img src={document} alt="document" />
                            </div>                            
                            <div className="text-xl">
                                Предложат шаблон договора найма жилого помещения
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="text-4xl">
                        Команда
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2">
                        {dataTeam.map( (elem) => <DormitoryInfo name={elem.name} grade={elem.grade} contacts={elem.contacts}/> )}                        
                    </div>
                </div>
            </div>
        </div>        
        <Footer/>
    </div>
}