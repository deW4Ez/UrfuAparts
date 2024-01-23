import React from "react"
import data from "./DataEqual.json"

function PersonLine({data, isEqual=true}){

    function Tag({title}){
        return <div className="flex justify-center items-center border border-black rounded-full w-max px-1">
            {title}
        </div>
    }

    return <div className="flex flex-row gap-14 items-center" >
        <div className="w-[100px] h-[100px] rounded-full bg-gray-500">
        </div>
        <div className="flex flex-col h-full gap-5">
            <div className="text-xl">
                {data.name}, {data.age}
            </div>
            <div className="flex flex-row flex-wrap w-40 gap-1 text-xs">
                {data.character.map( (elem) => {
                    return <Tag title={elem}  />
                } )}
            </div>
        </div>
        <div className="flex flex-row h-max gap-5 ">
            <div className="flex justify-center items-center px-6 py-2 bg-[#1E4391] text-white rounded-full cursor-pointer">
                {isEqual? "Связаться": "Оценить"}
            </div>
            <div className="flex justify-center items-center px-6 py-2 border border-solid border-black text-black rounded-full cursor-pointer">
                Убрать
            </div>
        </div>
    </div>
}

export default function FavoriteAnket(){

    return <div className="grid grid-cols-2 mx-14 gap-10">
        <div className="flex flex-col gap-5">
            <div className="text-4xl">
                Совпадение
            </div>
            <div className="flex flex-col gap-5">
                {data.equal.map( (elem) => <PersonLine data={elem} isEqual={true} />)}                
            </div>
        </div>
        <div className="flex flex-col gap-5">
            <div className="text-4xl">
                Ожидание
            </div>
            <div className="flex flex-col gap-5">
                {data.waiting.map( (elem) => <PersonLine data={elem} isEqual={true} />)}                
            </div>
        </div>
    </div>
}