import { useState } from "react"
import arrowDown from "../../assets/arrowDown.svg"
import arrowUp from "../../assets/arrowDown.svg"

export default function FAQ({question, answer}){

    const [isOpen, setOpen] = useState(false)

    return <div className="flex flex-col w-[70%]">
        <div className="flex flex-row justify-between items-center text-[26px] p-1 ">
            <div className="">
                {question} 
            </div>            
            <div>
                {isOpen? 
                <img src={arrowUp} onClick={() => setOpen(!isOpen)} alt="arrowUp"/> : 
                <img src={arrowDown} onClick={() => setOpen(!isOpen)} alt="arrowDown" /> }
            </div>            
        </div>
        <div className="text-[16px] p-1">
            {isOpen? answer: <></>}
        </div>
    </div>
}