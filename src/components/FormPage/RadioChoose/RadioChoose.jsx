import styles from "./RadioChoose.module.scss"

export default function RadioChoose({title, type, variants, onChange}){

    const changeData = (e) =>{        
        onChange(e)        
    }

    return <div className={styles.radio}>
                <div className={styles.subTitle}>
                    {title}
                </div>
                <div className={styles.subRadio}>
                    {variants.map((elem, id) => {
                        return <div className="flex flex-nowrap">
                                <input type="radio" value={elem} onClick={changeData} name={type} id={type + id.toString()} />
                                {elem}
                            </div>
                    })}                    
                </div>                                       
            </div>
}