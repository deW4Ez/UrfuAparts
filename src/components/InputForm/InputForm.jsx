import styles from "./InputForm.module.scss"

export default function InputForm({id, name, IsPassword, placeholder, onChange}){

    return <div className={styles.container}>
      <h3>{name}</h3>
      <input className={styles.input} type={IsPassword ? "password" : "text"}  placeholder={placeholder}
        onChange={onChange}
        id={id}        
        />
    </div>
  }