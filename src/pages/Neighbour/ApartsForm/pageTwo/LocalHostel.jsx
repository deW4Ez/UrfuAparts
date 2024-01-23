import styles from "./FormPageTwo.module.scss"

export default function LocalHostel({handleChanges}){
    return <div className="flex flex-col gap-2">
        <div className={styles.InputBlock}>
            <div className={styles.subTitle}>
                Номер общежития
            </div>
            <input id="numDomitory" onChange={handleChanges} className={styles.InputField} type="text" placeholder="Номер общежития" />
        </div>
        <div className={styles.InputBlock}>
            <div className={styles.subTitle}>
                Срок аренды
            </div>
            <input id="rentPeriod" onChange={handleChanges} className={styles.InputField} type="number" placeholder="Срок аренды" />
        </div>
        <div className={styles.InputBlock}>
            <div className={styles.subTitle}>
                Период проживания
            </div>
            <div className="flex flex-row">
                <input
                    className="bg-white border mr-2 py-1 px-2 border-gray-500 rounded-3xl w-14"
                    type="number"  
                    name="ageFrom" 
                    id="ageFrom"
                    placeholder="С"
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
                    placeholder="По"
                    onChange={handleChanges}  
                />
            </div>                    
        </div>
    </div>
}