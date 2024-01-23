import Tag from "../../../../components/Tag/Tag"
import { Link } from "react-router-dom"

export default function Anket(){

    const data = {
        name: "Иван",
        social: "",
        age: "22",
        description: "Привет, меня зовут Иван, я студент и люблю проводить время за компьютером. Я активно занимаюсь спортом и веду здоровый образ жизни",
        character:["Жаворонок","Пьет", "Курит", "Есть животное"],
        housePreference: ["Кировский р-н", "Комната", "От 15000 руб. до 25000 руб.", "От года"],
        neighbour:["от 19 до 23", "Мужской", "Жаворонок", "Не против питомца", "Нейтральное отношению к алкоголю", "Нейтральное отношение к курению"]
    }

    return <div className="flex flex-row mx-14 gap-32">
        <div className="flex flex-col items-center gap-4">
            <div className="bg-gray-500 w-[311px] h-[415px]">
            </div>
            <div className="text-2xl mb-5">
                {data.name}, {data.age}
            </div>
            <div className="border border-solid border-black rounded-full px-4 py-2 w-max">
                Изменить анкету
            </div>
        </div>
        <div className="flex flex-col gap-8">                        
            <div className="flex flex-col gap-3">
                <div className="text-3xl">
                    О себе
                </div>
                <div className="w-96">
                    {data.description}
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="text-3xl">
                    Характеристика себя
                </div>
                <div className="flex flex-row gap-2">
                    {data.character.map((elem) => {
                        return <Tag title={elem} />
                    })}
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="text-3xl">
                    Жилищные предпочтения
                </div>
                <div className="flex flex-row gap-2">
                    {data.housePreference.map((elem) => {
                        return <Tag title={elem} />
                    })}
                </div>
            </div>            
        </div>
        <div className="flex flex-col gap-3">
            <div className="text-3xl">
                Пожеланию по соседу
            </div>
            <div className="flex flex-row gap-2 flex-wrap">
                {data.neighbour.map((elem) => {
                    return <Tag title={elem} />
                })}
            </div>
        </div>
    </div>
}