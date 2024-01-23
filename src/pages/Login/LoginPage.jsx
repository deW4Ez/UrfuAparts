import { Link } from "react-router-dom"
import styles from "./Login.module.scss"
import InputForm from "../../components/InputForm/InputForm"

export default function LoginForm({isLogin,setLogin, handleFormData, sendData}){
    return(
      <div className={styles.loginForm}>
            <div className="flex flex-row justify-between gap-[3vw]">
              <h1 className="cursor-pointer text-[#1E4391] underline decoration-solid">
                Войти
              </h1>
              <h1 onClick={()=>{setLogin(!isLogin)}}  className="cursor-pointer hover:text-[#1E4391]">
                Регистрация
              </h1>
            </div>          
            <div className="flex flex-col justify-items-center items-center">
              <InputForm id="email" name="Почта" IsPassword={false} placeholder="Введите почту" onChange={handleFormData} />
              <InputForm id="password" name="Пароль" IsPassword={true} placeholder="Введите пароль" onChange={handleFormData} />              
              <div className="flex flex-row w-max gap-[4vw] items-center" >
                <div className="text-black text-1">
                  Забыли пароль?
                </div>
                <Link to="/">
                  <div onClick={sendData} className={styles.button}>
                    Войти
                  </div> 
                </Link>              
              </div>  
            </div>          
          </div>
    )
  }