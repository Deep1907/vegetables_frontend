import {useState} from "react"
import axios from "axios"
import {backendURL} from "../App.jsx"
import { useNavigate } from "react-router-dom"

const Login = () =>{

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate()
    
    const handleLogin = async (e) =>{
        e.preventDefault()

        const response = await axios.post(backendURL + "/api/users/login",{email,password})
        console.log(response)

        if(response.data.success){
            localStorage.setItem("token",response.data.token)
            localStorage.setItem("username", response.data.username)
            localStorage.setItem("isLoggedIn",true)
            navigate("/")
        }

        

    }

    return(
        <>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="text" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <input type="submit" value="Login Now" />
            </form>
        </>
    )
}

export default Login;