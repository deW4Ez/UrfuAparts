import Navbar from "../../components/NavBar/Navbar"
import { useState } from "react"
import { POST_DATA } from "../../providers/fetchData"
import LoginForm from "./LoginPage"
import RegistrForm from "./RegisterPage"
import { URL_AUTH } from "../../providers/constances"



export default function Login(){

  const [isLogin, setLogin] = useState(true)
  
  const [FormData, setFormData] = useState({  
          
  })
  
  const handleFormData = (e) =>{
      const tempData = {...FormData}
      tempData[e.target.id] = e.target.value 
      setFormData(tempData)
    }

  const sendData = async () =>{
      await POST_DATA(FormData, URL_AUTH)        
  }

    return( 
      <div className="h-screen flex flex-col items-center bg-white">
        <Navbar/>
        <div className="flex items-center h-screen">
          {isLogin? <LoginForm isLogin={isLogin} setLogin={setLogin} sendData={sendData} handleFormData={handleFormData} /> :
          <RegistrForm isLogin={isLogin} setLogin={setLogin} sendData={sendData} handleFormData={handleFormData}/>}          
        </div>
      </div>
    
    )
  } 