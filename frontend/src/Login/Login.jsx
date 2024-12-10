import { createContext, useContext, useEffect, useState } from "react"
import { UserContext } from "../App"




function Login() {
    
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    
    const {user, setUser} = useContext(UserContext)

    useEffect(() => {
        console.log(user)
    }, [user])




    const handleLoginSubmit = async (e) => {
        e.preventDefault()

        const formData = {
            email: email,
            password: password
        }
        
        
        const url = "http://localhost:5000/auth/login"
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
            credentials: "include"
        });

        const responseData = await response.json()

        if (response.ok) {                        
            setUser(() => ({
                id: responseData.user.id,
                name: responseData.user.username
            }))
            window.location.pathname = responseData.url
            
        } else {
            console.log(responseData.message)
        }

    }





    return (
        <>
        <h1>Login</h1>
        <form>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" onClick={(e) => handleLoginSubmit(e)}></button>
        </form>
        
        </>
    )
}


export default Login