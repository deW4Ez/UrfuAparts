import styles from "./PrivateDomitory.module.scss"
import Footer from "../../../components/Footer/Footer"
import Navbar from "../../../components/NavBar/Navbar"
import { Link } from "react-router-dom"
import arrowRight from "../../../assets/arrowRight.svg"
import receipt from "./assets/receipt.svg"
import contactBook from "./assets/contactBook.svg"
import document from "./assets/document.svg"
import alertCircle from "../../../assets/alert-circle.svg"
import { useState } from "react"
import dormitory1 from "../../../assets/Private Dormitories/Dormitory1.png"
import dormitory2 from "../../../assets/Private Dormitories/Dormitory2.jpg"
import dormitory3 from "../../../assets/Private Dormitories/Dormitory3.png"
import dormitory4 from "../../../assets/Private Dormitories/Dormitory4.jpg"
import dormitory5 from "../../../assets/Private Dormitories/Dormitory5.jpg"
import { URL_PRIVATE_DORMITORY } from "../../../providers/constances"

function DomitoryBlock({name, address, cost, extra, image}){
    return <div className="flex flex-row gap-5 m-5">
        <div className="flex flex-col gap-3">
            <div className="text-3xl">
                {name}
            </div>
            <div className="text-xl">
                {address}
            </div>
            <div className="text-xl">
                {cost}
            </div>
            <div>
                {extra}
            </div>
        </div>
        <div className="w-96 max-h-60 bg-gray-500">
            <img src={image} alt="image" />
        </div>
    </div>
}

function InputBlock({placeholder, title, id, onClick}){
    return <div className={styles.InputBlock}>
        <div className={styles.subTitle}>
            {title}
        </div>
        <input id={id} onClick={onClick} type="text" className={styles.InputField} placeholder={placeholder} />
    </div>
}


export default function Private_domitory(){

    const [FormData,setFormData] = useState({
       dormitories: []
    })

    const handleFormData = (e) =>{
      const tempData = {...FormData}
      tempData[e.target.id] = e.target.value 
      setFormData(tempData)
    }

    const handleChangesRadio = (e) =>{
        const tempData = {...FormData}
        tempData[e.target.name] = e.target.value
        setFormData(tempData)       
    }

    const sendData = async () =>{
        try{
          await fetch(URL_PRIVATE_DORMITORY,{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
              body: JSON.stringify(FormData)
            })
      } catch (error){
          console.log(error)
      } 
    }

    const DomitoryData = [
        {
            name: "Общежитие №1",
            address:"ул. Прониной, 25",
            cost: "От 8500 ₽ / чел",
            extra: "1-4 человека проживают в комнате",
            image: dormitory1
        },
        {
            name: "Общежитие №2",
            address:"ул. Короленко, 5",
            cost: "От 9500 ₽ / чел",
            extra: "3-4 человека проживают в комнате",
            image: dormitory2
        },
        {
            name: "Общежитие №3",
            address:"ул. Красноармейская, 1",
            cost: "От 8500 ₽ / чел",
            extra: "1-4 человека проживают в комнате",
            image: dormitory3
        },
        {
            name: "Общежитие №4",
            address:"ул. Автоматики, 3/2",
            cost: "От 7500 ₽ / чел",
            extra: "2-6 человека проживают в комнате",
            image: dormitory4
        },
        {
            name: "Общежитие №5",
            address:"ул. Маршала Жукова, 3",
            cost: "От 7300 ₽ / чел",
            extra: "2-5 человека проживают в комнате",
            image: dormitory5
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
                <Link to="/rent_flats">
                    Платное жилье
                </Link>
                <img src={arrowRight} alt=">" />
                <div className={styles.MainText}>
                    Частное общежитие
                </div>
            </div>
            <div className={styles.title}>
                Частное общежитие
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
                    Раздел предназначен для студентов, которые ищут качественное и комфортное жилье в непосредственной близости к своему интституту. Этот сервис предоставляет студентам доступ к удобным жилым помещениям, где они могут жить в комфортных условиях, обеспечивающих удобный и спокойный образ жизни во время учебы.
                </div>
            </div>
            <div className="flex flex-col gap-14 my-10 ml-14">
                <div className="text-4xl my-5">
                    Какие преимущества?
                </div>
                <div className="flex flex-col items-center w-full gap-10">
                    <div className="flex flex-row justify-between gap-32">
                        <div className="flex flex-col w-80 items-center text-center gap-5">                            
                            <div className="w-30" >
                                <img className="w-30" src={document} alt="document" />
                            </div>
                            <div className="text-xl">
                                Официально оформляется проживание студента (заключается договор)
                            </div>
                        </div>
                        <div className="flex flex-col w-80 items-center text-center gap-5">
                            <div className="w-30" >
                                <img className="w-30" src={contactBook} alt="contactBook" />
                            </div>                             
                            <div className="text-xl">
                                Осуществляется постановка на миграционный учет (временная регистрация)
                            </div>
                        </div>
                        <div className="flex flex-col w-80 items-center text-center gap-5">
                            <div className="w-30" >
                                <img src={receipt} alt="receipt" />
                            </div>                            
                            <div className="text-xl">
                                Стоимость рассчитана с учетом коммунальных платежей, интернета и охраны
                            </div>
                        </div>                        
                    </div>
                    <div className="bg-[#1E4391] w-max text-white px-5 py-2 rounded-full">
                        Оставить заявку
                    </div>
                </div>                
            </div>
            <div className="grid grid-cols-2 gap-5 mx-14 my-5">
               {DomitoryData.map( (elem) => <DomitoryBlock name={elem.name} address={elem.address} cost={elem.cost} extra={elem.extra} image={elem.image}/>)}
               <div className="flex flex-row text-balance w-96 px-4 py-2 gap-4 bg-[#1E4391] rounded-2xl text-white h-max my-5">
                    <img src={alertCircle} alt="alert" />
                    <div>Если вы ищите соседа то можете воспользоваться нашим сервисом "Поиск соседа"</div>
                </div>
            </div>
            <div className="grid grid-cols-2 mx-14 my-5">
               <div className="text-4xl">
                    Оставьте заявку
                </div>
               <div className="flex flex-col gap-3 mx-10 my-5">
                    <InputBlock onChange={handleFormData} id="name" title="Имя" placeholder="Имя" />
                    <InputBlock onChange={handleFormData} id="surname" title="Фамилия" placeholder="Фамилия" />
                    <InputBlock onChange={handleFormData} id="phone" title="Номер телефона" placeholder="Номер телефона" />
                    <InputBlock onChange={handleFormData} id="studyPlace" title="Место учебы" placeholder="Например, УГИ" />
                    <InputBlock onChange={handleFormData} id="course" title="Курс обучения" placeholder="Например, 2 курс" />
                    <div className="flex flex-col gap-4">
                        <div className="text-2xl">
                            В какое общежитие планируете заселиться?
                        </div>
                        <div className="flex flex-col gap-2 mx-10">
                            <div>
                                <input onClick={handleChangesRadio} type="checkbox" name="address" id="address1" />
                                <label className="text-xl" htmlFor="address1"> Прониной, 25</label>
                            </div>
                            <div>
                                <input onClick={handleChangesRadio} type="checkbox" name="address" id="address2" />
                                <label className="text-xl" htmlFor="address2"> Переулок Автоматики, 3/2</label>
                            </div>
                            <div>
                                <input onClick={handleChangesRadio} type="checkbox" name="address" id="address3" />
                                <label className="text-xl" htmlFor="address3"> Красноармейская, 1</label>
                            </div>
                            <div>
                                <input onClick={handleChangesRadio} type="checkbox" name="address" id="address4" />
                                <label className="text-xl" htmlFor="address4"> Короленко, 5</label>
                            </div>
                            <div>
                                <input onClick={handleChangesRadio} type="checkbox" name="address" id="address5" />
                                <label className="text-xl" htmlFor="address5"> Маршала Жукова,5</label>
                            </div>
                        </div>                        
                    </div>
                    <InputBlock onChange={handleFormData} id="neighbour" title="С кем хотите жить? (ФИО, ссылка Вконтакте)" placeholder="С кем хотите жить?"/>
                    <div className="flex flex-col gap-2">
                        <div className="text-2xl">
                            Претендуете ли на заселение в общежитие в универе?
                        </div>
                        <div className="flex flex-row gap-10 text-xl">
                            <div>
                                <input onClick={handleChangesRadio} type="radio" name="chose" id="chose1" />
                                <label htmlFor="chose1">Да</label>
                            </div>
                            <div>
                                <input onClick={handleChangesRadio} type="radio" name="chose" id="chose2" />
                                <label htmlFor="chose2">Нет</label>
                            </div>
                        </div>
                    </div>
                    <div onClick={sendData} className="bg-[#1E4391] text-white my-5 py-2 px-8 rounded-full w-max cursor-pointer">
                        Отправить
                    </div>
               </div>
            </div>           
        </div>        
        <Footer/>
    </div>
}