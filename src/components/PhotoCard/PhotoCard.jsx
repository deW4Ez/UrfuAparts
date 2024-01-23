import { useState } from "react"
import Plug from "../../assets/Plug.svg"
import FavoriteButton from "../../assets/FavoriteButton.svg"
import RejectButton from "../../assets/RejectButton.svg"

export default function PhotoCard({changePerson}){

    const [currentPhoto, setPhoto] = useState("photo")

    const handleSection = (e) =>{
        setPhoto(e.target.id)
    }

    return <div className="flex flex-col">
        <div className="flex flex-row mx-16 mb-10 h-max">
            <div id="photo" onClick={handleSection} 
                className={(currentPhoto === "photo"? "border-b-2 border-[#1E4391]" : "border-b-2 border-gray-500") + " px-5 py-2 cursor-pointer"}>
                Фото
            </div>
            <div id="photoFlat" onClick={handleSection} 
                className={(currentPhoto === "photoFlat"? "border-b-2 border-[#1E4391]" : "border-b-2 border-gray-500") + " px-5 py-2 cursor-pointer"}>
                Фото квартиры
            </div>            
        </div>
        <div>
            <img src={Plug} alt="plug" />
        </div>
        <div className="flex flex-row justify-center gap-5 my-2">
            <img onClick={changePerson} className="cursor-pointer" src={RejectButton} alt="Reject" />
            <img onClick={changePerson} className="cursor-pointer" src={FavoriteButton} alt="Favorite" />
        </div>
    </div>
}