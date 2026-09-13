import {useState} from "react"


const Login = () =>{

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    const handleLogin = (e) =>{
        e.preventDefault()

        

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