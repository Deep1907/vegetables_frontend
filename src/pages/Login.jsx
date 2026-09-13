import {useState} from "react"
import axios from "axios"
import {backendURL} from "../App.jsx"


const Login = () =>{

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    const handleLogin = async (e) =>{
        e.preventDefault()

        const response = await axios.post(backendURL + "/api/users/login",{email,password})
        console.log(response)

        

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