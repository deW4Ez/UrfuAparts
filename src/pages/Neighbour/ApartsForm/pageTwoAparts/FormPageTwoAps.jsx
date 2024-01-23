import styles from "./FormPageTwoAps.module.scss"
import RadioChoose from "../../../../components/FormPage/RadioChoose/RadioChoose"

export default function FormPageTwoAps({data, changeFormData}){

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
                    Район
                </div>
                <input id="district" onChange={handleChanges} className={styles.InputField} type="text" placeholder="Район" />
            </div>
            <div className={styles.InputBlock}>
                <div className={styles.subTitle}>
                    Тип жилья
                </div>
                <select name="houseTwoAps" id="houseType" 
                    className={styles.InputField}
                    onChange={handleChanges}
                >                        
                    <option value="Квартира" selected>Квартира</option>
                    <option value="Общежитие УрФУ">Общежитие УрФУ</option>
                    <option value="Частное общежитие">Частное общежитие</option>
                </select>
            </div>             
            <RadioChoose 
                title="Для соседа отдельная комната?"
                type="IsOtherRoom"
                variants={["Да","Нет"]}
                onChange={handleChangesRadio}
            />
            <div className={styles.InputBlock}>
                <div className={styles.subTitle}>
                    Стоимость проживания
                </div>
                <input id="costLiving" onChange={handleChanges} className={styles.InputField} type="number"  placeholder="Стоимость проживания" />
            </div>
            <div className={styles.InputBlock}>
                <div className={styles.subTitle}>
                    Срок аренды
                </div>
                <input id="rentPeriod" onChange={handleChanges} className={styles.InputField} type="number"  placeholder="Срок аренды" />
            </div>               
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
                        id="ageFromNeighbour"
                        onChange={handleChanges}
                    />
                    <div className="text-center text-2xl">
                        -
                    </div>
                    <input
                        className="bg-white border ml-2 py-1 px-2 border-gray-500 rounded-3xl w-14"
                        type="number" 
                        name="ageTo" 
                        id="ageToNeighbour"
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
                    type="chronotypeNeighbour"
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

