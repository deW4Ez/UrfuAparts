import { Link } from "react-router-dom"
import Navbar from "../../components/NavBar/Navbar"
import styles from "./Home.module.scss"
import { useState } from "react"
import homeLogo from "../../assets/homeLogo.svg"
import payHomeLogo from "../../assets/payHomeLogo.svg"
import neighborLogo from "../../assets/neighborLogo.svg"
import DescriptionSection from "../../components/DescriptionSection/DescriptionSection"
import FAQ from "../../components/FAQ/FAQ"
import Footer from "../../components/Footer/Footer"
import { URL_HOME } from "../../providers/constances"
import { POST_DATA } from "../../providers/fetchData"


function InputBlock({placeholder, title, id, onChange}){
  return <div className={styles.InputBlock}>
      <div className={styles.subTitle}>
          {title}
      </div>
      <input onChange={onChange} id={id} type="text" className={styles.InputField} placeholder={placeholder} />
  </div>
}

export default function Home(){

    const [FormData,setFormData] = useState({
        name:"",
        email:"",
        message:""
    })

    const handleFormData = (e) =>{
      const tempData = {...FormData}
      tempData[e.target.id] = e.target.value 
      setFormData(tempData)
    }

    const sendData = async () =>{
      await POST_DATA(FormData, URL_HOME)
    }

    const [descript, setDescritpt] = useState([{
      img: homeLogo,
      descript: "Ваш персональный гид в мире общежитий, предоставляющий полезную информацию, удобный поиск, запись к техническим специалистам и бронирование стиральных машин.",
      title:"Общежития",
      link: "/dormitory"
    },{
      img: payHomeLogo,
      descript:"Ваш идеальный путеводитель в мире арендного жилья, предоставляющий возможность подачи заявок на услуги риелторов и удобный просмотр вариантов квартир.",
      title: "Платное жилье",
      link: "/rent_flats"     
    },{
      img: neighborLogo,
      descript:"Ваш личный помощник в поиске идеального соседа для совместного проживания, делая процесс поиска соседей простым и приятным.",
      title: "Поиск соседа",
      link: "/neighbour"
    }])
    
    const [faqList, setFaqList] = useState([
      {
        question: "Что мне может предложить URFU.Aparts?",
        answer: "Принимая во внимание показатели успешности, внедрение современных методик позволяет оценить значение благоприятных перспектив. Равным образом, внедрение современных методик способствует повышению качества соответствующих условий активизации."
      },{
        question: "Вы работаете с общежитиями напрямую?",
        answer: "Принимая во внимание показатели успешности, внедрение современных методик позволяет оценить значение благоприятных перспектив. Равным образом, внедрение современных методик способствует повышению качества соответствующих условий активизации."
      },{
        question: "Как быстро можно найти место для проживания с помощью вашего сервиса?",
        answer: "Принимая во внимание показатели успешности, внедрение современных методик позволяет оценить значение благоприятных перспектив. Равным образом, внедрение современных методик способствует повышению качества соответствующих условий активизации."
      },{
        question: "Ваш сервис бесплатный?",
        answer: "Принимая во внимание показатели успешности, внедрение современных методик позволяет оценить значение благоприятных перспектив. Равным образом, внедрение современных методик способствует повышению качества соответствующих условий активизации."
      }
    ])

    return(
      <div className='flex flex-col bg-white w-full'>
        <Navbar/>
        <div className="grid grid-cols-[30%_70%] h-1/2 grid-row-1 whitespace-nowrap">
          <div className={styles.textMain}>
            <div>Сервис для комфортной</div>  
            <div>жизни каждого</div>
            <div>студента</div>           
          </div>
          <div className={styles.background}>
            
          </div>
        </div>
        <div className="text-black mx-[10%]">
          <div className="text-[42px] my-[30px] ">
            Что такое URFU.Aparts?
          </div>
          <div className="text-[26px]">
            Откройте для себя наш универсальный сервис, объединяющий три ключевых сервиса
          </div>
        </div>  
        
        <div className="flex flex-row text-black mt-[40px]">
          {descript.map((elem)=>
            <DescriptionSection image={elem.img} descript={elem.descript} title={elem.title} link={elem.link} />            
          )}
        </div>
        <div className="grid grid-cols-2 text-black mt-[10vh]"> 
            <div className="text-[42px] pl-[10%]">Часто задаваемые вопросы</div>
            <div className="flex flex-col divide-y-2 divide-black w-full">
              {faqList.map((elem)=>{
                return <FAQ question={elem.question} answer={elem.answer} />
              })}
            </div>
        </div>
        <div className="grid grid-cols-[50%_50%] text-black mt-[50px] mb-[10vh]">
          <div className="flex flex-col ml-[10%]">
              <div className="text-4xl pb-[10px] ">
                Остались вопросы?
              </div>
              <div className="text-2xl">
                technozai@mail.ru
              </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="text-2xl">
              Если у вас остались вопросы или вы хотите получить 
              дополнительную информацию о проекте URFU.Aparts,
              то заполните форму - мы свяжемся с вами и подробно проконсультируем:
            </div>
            <InputBlock onChange={handleFormData} id={"name"} title={"Имя"} placeholder={""} />
            <InputBlock onChange={handleFormData} id={"email"} title={"Почта"} placeholder={""} />
            <InputBlock onChange={handleFormData} id={"message"} title={"Сообщение"} placeholder={""} />
            <div onClick={sendData} className="text-white text-[18px] bg-[#1E4391] rounded-[24px] p-[8px_32px] w-max cursor-pointer">
              Отправить
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }