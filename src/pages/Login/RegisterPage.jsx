import { Link } from "react-router-dom"
import styles from "./Login.module.scss"
import InputForm from "../../components/InputForm/InputForm"

export default function RegistrForm({isLogin,setLogin, handleFormData, sendData}){
    return(
      <div className={styles.loginForm}>
            <div className="flex flex-row justify-between gap-[3vw]">
              <div >
                <h1 onClick={()=>{setLogin(!isLogin)}} className="cursor-pointer hover:text-[#1E4391]">
                  Войти
                </h1>
              </div>              
              <h1 className=" cursor-pointer text-[#1E4391] underline decoration-solid">
                Регистрация
              </h1>
            </div>          
            <div className="flex flex-col justify-items-center items-center">
              <InputForm id="email" name="Почта" IsPassword={false} onChange={handleFormData} placeholder="Введите почту"/>
              <InputForm id="password" name="Пароль" IsPassword={true} onChange={handleFormData} placeholder="Введите пароль"/>
              <InputForm id="passwordRepeat" name="Подтвердите пароль" IsPassword={true} placeholder="Введите пароль"/>
              <div className="flex flex-col w-max items-center" >
                <div className="text-[12px]">
                  На ваш email придет код для подтверждения почты
                </div>
                <Link to="/">
                  <div onClick={sendData} className={styles.button}>
                    Зарегистрироваться
                  </div> 
                </Link>         
              </div>  
            </div>          
          </div>
    )
  }