import styles from "./FormPageTwo.module.scss"
import RadioChoose from "../../../../components/FormPage/RadioChoose/RadioChoose"
import { useState } from "react"
import Apartment from "./Apartment"
import HostelUrfu from "./HostelUrfu"
import LocalHostel from "./LocalHostel"

export default function FormPageTwo({ changeFormData}){
    
    const [typeHouse, setTypeHouse] = useState("Квартира")

    const handleChanges = (e) =>{
        changeFormData(e.target.id, e.target.value)        
    }

    const handleChangesRadio = (e) =>{
        changeFormData(e.target.name, e.target.value)        
    }

    return <div className={styles.container}>
            <div className={styles.Block}>
                <div className={styles.title}>
                    Жилищные предпочтения
                </div>
                <div className={styles.InputBlock}>
                    <div className={styles.subTitle}>
                        Тип жилья
                    </div>
                    <select name="house" id="houseChoose" 
                        value={typeHouse}
                        onChange={setTypeHouse}
                        className={styles.InputField}
                    >                        
                        <option value="Квартира" selected>Квартира</option>
                        <option value="Общежитие УрФУ">Общежитие УрФУ</option>
                        <option value="Частное общежитие">Частное общежитие</option>
                    </select>
                </div>
                {typeHouse === "Квартира" ? <Apartment handleChanges={handleChanges}/>: typeHouse === "Общежитие УрФУ"? <HostelUrfu handleChanges={handleChanges}/> : <LocalHostel handleChanges={handleChanges}/>}               
            </div>
            <div className={styles.Block}>
                <div className={styles.title}>
                    Пожелания по соседу
                </div>
                <div className={styles.InputBlock}>
                    <div className={styles.subTitle}>
                        Возраст
                    </div>
                    <div className="flex flex-row">
                        <input
                            className="bg-white border mr-2 py-1 px-2 border-gray-500 rounded-3xl w-14"
                            type="number" 
                            name="ageFrom" 
                            id="ageFrom"
                            onChange={handleChanges}
                        />
                        <div className="text-center text-2xl">
                            -
                        </div>
                        <input
                            className="bg-white border ml-2 py-1 px-2 border-gray-500 rounded-3xl w-14"
                            type="number" 
                            name="ageTo" 
                            id="ageTo"
                            onChange={handleChanges} 
                        />
                    </div>                    
                </div>
                <RadioChoose 
                        title="Пол"
                        type="genderNeighbour"
                        variants={["Мужской","Женский", "Любой"]}
                        onChange={handleChangesRadio}
                    />
                    <RadioChoose
                        title="Желаемый хронотип"
                        type="chronoNeighbour"
                        variants={["Жаворонок","Сова","Любой"]}
                        onChange={handleChangesRadio}
                    />
                    <RadioChoose
                        title="Отношение к курению"
                        type="smokeNeighbour"
                        variants={["Положительное","Нейтральное","Негативное"]}
                        onChange={handleChangesRadio}
                    />
                    <RadioChoose
                        title="Отношение к алкоголю"
                        type="alchogolNeighbour"
                        variants={["Положительное","Нейтральное","Негативное"]}
                        onChange={handleChangesRadio}
                    />
                    <RadioChoose
                        title="Наличие питомца"
                        type="petNeighbour"
                        variants={["Против","Не против"]}
                        onChange={handleChangesRadio}
                    />
            </div>
        </div>

}