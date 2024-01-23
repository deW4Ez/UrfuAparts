import styles from "./FormPageTwo.module.scss"

export default function HostelUrfu({handleChanges}){
    return <div className="flex flex-col gap-2">
        <div className={styles.InputBlock}>
            <div className={styles.subTitle}>
                Курс
            </div>
            <select onChange={handleChanges} name="course" id="course" className={styles.InputField}>                        
                <option value="1" selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>
        <div className={styles.InputBlock}>
            <div className={styles.subTitle}>
                Институт
            </div>
            <select onChange={handleChanges} name="college" id="college" className={styles.InputField}>                        
                <option value="Институт естественных наук и математики" selected>Институт естественных наук и математики</option>
                <option value="Институт новых материалов и технологий">Институт новых материалов и технологий</option>
                <option value="Институт радиоэлектроники и информационных технологий–РтФ">Институт радиоэлектроники и информационных технологий–РтФ</option>
                <option value="Институт строительства и архитектуры">Институт строительства и архитектуры</option>
                <option value="Институт физической культуры, спорта и молодежной политики">Институт физической культуры, спорта и молодежной политики</option>
                <option value="Институт фундаментального образования">Институт фундаментального образования</option>
                <option value="Институт экономики и управления">Институт экономики и управления</option>
                <option value="Уральский гуманитарный институт">Уральский гуманитарный институт</option>
                <option value="Уральский энергетический институт">Уральский энергетический институт</option>
                <option value="Физико-технологический институт">Физико-технологический институт</option>
                <option value="Химико-технологический институт">Химико-технологический институт</option>
                <option value="Институт технологий открытого образования">Институт технологий открытого образования</option>
            </select>
        </div>
        <div className={styles.InputBlock}>
            <div className={styles.subTitle}>
                Желаемое общежитие
            </div>
            <select onChange={handleChanges} name="housing" id="housing" className={styles.InputField}>                        
                <option value="Студенческий корпус №1" selected>Студенческий корпус №1</option>
                <option value="Студенческий корпус №2" >Студенческий корпус №2</option>
                <option value="Студенческий корпус №3" >Студенческий корпус №3</option>
                <option value="Студенческий корпус №4" >Студенческий корпус №4</option>
                <option value="Студенческий корпус №5" >Студенческий корпус №5</option>
                <option value="Студенческий корпус №6" >Студенческий корпус №6</option>
                <option value="Студенческий корпус №7" >Студенческий корпус №7</option>
                <option value="Студенческий корпус №8" >Студенческий корпус №8</option>
                <option value="Студенческий корпус №9" >Студенческий корпус №9</option>
                <option value="Студенческий корпус №10" >Студенческий корпус №10</option>
                <option value="Студенческий корпус №11" >Студенческий корпус №11</option>
                <option value="Студенческий корпус №12" >Студенческий корпус №12</option>
                <option value="Студенческий корпус №13" >Студенческий корпус №13</option>
                <option value="Студенческий корпус №14" >Студенческий корпус №14</option>
                <option value="Студенческий корпус №15" >Студенческий корпус №15</option>
                <option value="Новокольцовский кампус" >Новокольцовский кампус</option>               
            </select>
        </div>
    </div>
}