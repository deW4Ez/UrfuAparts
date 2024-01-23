import styles from "./FormPageOne.module.scss"
import RadioChoose from "../../../../components/FormPage/RadioChoose/RadioChoose"

export default function FormPageOne({changeFormData}){

    const handleChanges = (e) =>{
        changeFormData(e.target.id, e.target.value)        
    }

    const handleChangesRadio = (e) =>{
        changeFormData(e.target.name, e.target.value)        
    }

    return <div className={styles.container}>
            <div className={styles.Block}>
                <div className={styles.title}>
                    Личная информация
                </div>
                <div className={styles.InputBlock}>
                    <div className={styles.subTitle}>
                        Имя
                    </div>                    
                    <input id="name" onChange={handleChanges} className={styles.InputField} type="text" placeholder="Имя" />
                </div>
                <RadioChoose
                    title="Пол"
                    type="gender"
                    variants={["Мужской","Женский"]}
                    onChange={handleChangesRadio}
                />
                <div className={styles.InputBlock}>
                    <div className={styles.subTitle}>
                        Ссылка на соцсети
                    </div>
                    <input id="link" onChange={handleChanges} className={styles.InputField} type="text" placeholder="Например, Telegram" />
                </div>
                <div className={styles.InputBlock}>
                    <div className={styles.subTitle}>
                        Возраст
                    </div>                    
                    <input id="age" onChange={handleChanges} className={styles.InputField} type="number" placeholder="Возраст" />
                </div>
                <RadioChoose
                    title="Гражданство России?"
                    type="citizen"
                    variants={["Да","Нет"]}
                    onChange={handleChangesRadio}
                />                
            </div>
            <div className={styles.Block}>
                <div className={styles.title}>
                    Характеристика себя
                </div>
                <RadioChoose
                    title="Ваш хронотип"
                    type="chronotype"
                    variants={["Жаворонок","Сова"]}
                    onChange={handleChangesRadio}
                />
                <RadioChoose
                    title="Отношение к курению"
                    type="smoke"
                    variants={["Положительное","Нейтральное","Негативное"]}
                    onChange={handleChangesRadio}
                />
                <RadioChoose
                    title="Отношение к алкоголю"
                    type="alhohol"
                    variants={["Положительное","Нейтральное","Негативное"]}
                    onChange={handleChangesRadio}
                />  
                <RadioChoose
                    title="Есть животные?"
                    type="pet"
                    variants={["Да","Нет"]}
                    onChange={handleChangesRadio}
                />
                <div className={styles.InputBlock}>
                    <div className={styles.subTitle}>
                        О себе
                    </div>
                    <textarea id="description" onChange={handleChanges} className={styles.InputArea} type="text" 
                        placeholder="Напишите о ваших увлечениях и других подробностях, которые могли бы быть важны вашему соседу"
                     />
                </div>
            </div>
            <div className={styles.Block}>
                <div className={styles.title}>
                    Ваши фотографии
                </div>
                <div className="text-xs">
                    Необязательно, но рекомендуется для установления доверия
                </div>
                <input className={styles.InputField} type="file" name="photo" id="photo1" />
                <div>
                    <RadioChoose
                        title="Ищите соседа в определенное жилье?"
                        type="neighbour"
                        variants={["Да", "Нет"]}
                        onChange={handleChangesRadio}
                    />
                </div>
            </div>
        </div>

}