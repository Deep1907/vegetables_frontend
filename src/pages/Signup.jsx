import {useState,useEffect} from "react"
import {backendURL} from "../App.jsx"
import axios from "axios"
import {useNavigate} from "react-router-dom";

const Signup = () =>{

    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate()
    
    useEffect(()=>{
        handleSignup()
    },[])

    const handleSignup = async (e) =>{
        e.preventDefault()
        const response = await axios.post(backendURL + "/api/users/signup",{username,email,password})
        console.log(response)
        navigate("/login")
    }

    return(
        <>
            <div>
                <form onSubmit={(e)=>handleSignup}>
                    <input type="text" placeholder="Enter Username" value={username} onChange={(e)=>setUsername(e.target.value)} /> <br />
                    <input type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} /> <br />
                    <input type="text" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} /> <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>    
        </>
    )
}

export default Signup;