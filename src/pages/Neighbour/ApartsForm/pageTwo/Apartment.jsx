import styles from "./FormPageTwo.module.scss"
import RadioChoose from "../../../../components/FormPage/RadioChoose/RadioChoose"

export default function Apartment({handleChanges}){
    return <div className="flex flex-col gap-2">
            <div className={styles.InputBlock}>
                    <div className={styles.subTitle}>
                        Район
                    </div>
                    <input id="district" onChange={handleChanges} className={styles.InputField} type="text" placeholder="Район" />
            </div>                
            <div className={styles.InputBlock}>
                <div className={styles.subTitle}>
                    Бюджет
                </div>
                <div className="flex flex-row items-end">
                    <input
                        className="bg-white border mr-2 py-1 px-2 border-gray-500 rounded-3xl w-20"
                        type="number" 
                        name="budgetFrom" 
                        id="budgetFrom"
                        placeholder="От"
                        onChange={handleChanges}
                    />
                    <div className="text-center text-xs mr-5">
                        руб
                    </div>
                    <input
                        className="bg-white border ml-2 py-1 px-2 border-gray-500 rounded-3xl w-20"
                        type="number" 
                        name="budgetTo" 
                        id="budgetTo"
                        placeholder="До"
                        onChange={handleChanges}
                    />
                    <div className="text-center text-xs">
                        руб
                    </div>
                </div>                    
            </div>
            <div className={styles.InputBlock}>
                <div className={styles.subTitle}>
                    Срок аренды
                </div>
                <input className={styles.InputField} type="text" placeholder="Срок аренды" />
            </div>
            <div className={styles.InputBlock}>
                <div className={styles.subTitle}>
                    Период проживания
                </div>
                <div className="flex flex-row">
                    <input
                        className="bg-white border mr-2 py-1 px-2 border-gray-500 rounded-3xl w-14"
                        type="number"  
                        name="livingFrom" 
                        id="livingFrom"
                        placeholder="С"
                        onChange={handleChanges}
                    />
                    <div className="text-center text-2xl">
                        -
                    </div>
                    <input
                        className="bg-white border ml-2 py-1 px-2 border-gray-500 rounded-3xl w-14"
                        type="number" 
                        name="livingTo" 
                        id="livingTo"
                        placeholder="По"
                        onChange={handleChanges}  
                    />
                </div>                    
            </div>
    </div>
}