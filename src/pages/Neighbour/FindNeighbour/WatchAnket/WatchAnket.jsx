import arrowUrl from "../../../../assets/arrowUrl.svg"
import styles from "./WatchAnket.module.scss"
import { Link } from "react-router-dom"
import Tag from "../../../../components/Tag/Tag"
import PhotoCard from "../../../../components/PhotoCard/PhotoCard"
import { useEffect, useState } from "react"
import { GET_DATA } from "../../../../providers/fetchData"
import { URL_WATCH_ANKETA } from "../../../../providers/constances"

const url = "http://localhost:8080/"

export default function WatchAnket(){

    const [currentPerson, setCurrentPerson] = useState(0)

    const [data,setData] = useState([{
        name: "Иван",
        social: "",
        age: "22",
        description: "Привет, меня зовут Иван, я студент и люблю проводить время за компьютером. Я активно занимаюсь спортом и веду здоровый образ жизни",
        character:["Жаворонок","Гражданин РФ","Не пью", "Не курю", "Есть животное"],
        housePreference: ["Кировский р-н", "Комната", "От 15000 руб. до 25000 руб.", "От года"]
    },
    {
        name: "Алина",
        social: "",
        age: "20",
        description: "Привет, меня зовут Алина. Люблю читать книжки и слушать тяжелую музыку",
        character:["Жаворонок","Гражданин РФ","Пью", "Не курю", "Нет животного"],
        housePreference: ["Кировский р-н", "Комната", "От 20000 руб. до 30000 руб.", "От года"]
    }
])

    function NextPerson(){
        setCurrentPerson(currentPerson + 1)
    }

    useEffect(() => {        
        const tempData = GET_DATA(URL_WATCH_ANKETA)
        if (tempData.length >0){
            setData(tempData)
        }
        console.log(tempData)     
    },[])

    return currentPerson < data.length ? <div className="flex flex-row justify-center gap-20">
        <PhotoCard changePerson={NextPerson} />
        <div className="flex flex-col gap-5 mt-24">
            <div className="text-4xl">
                {data[currentPerson].name}, {data[currentPerson].age}
            </div>
            <Link to={data.social}>
                <div className={styles.buttonUrl}>
                    ВК
                    <img src={arrowUrl} alt="url" />
                </div>
            </Link>
            <div>
                <div className="text-2xl">
                    О себе
                </div>
                <div className="w-96">
                    {data[currentPerson].description}
                </div>
            </div>
            <div>
                <div className="text-2xl">
                    Характеристика себя
                </div>
                <div className="flex flex-row gap-2">
                    {data[currentPerson].character.map((elem) => {
                        return <Tag title={elem} />
                    })}
                </div>
            </div>
            <div>
                <div className="text-2xl">
                    Жилищные предпочтения
                </div>
                <div className="flex flex-row gap-2">
                    {data[currentPerson].housePreference.map((elem) => {
                        return <Tag title={elem} />
                    })}
                </div>
            </div>            
        </div>
    </div> : <div className="text-center text-4xl">
        На данный момент анкет нет
    </div>
}