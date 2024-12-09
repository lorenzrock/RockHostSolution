import { useState } from "react"


function Login() {
    
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")





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
            body: JSON.stringify(formData)
        });

        const responseData = await response.json()

        if (response.ok) {
            console.log("ok")
            console.log(responseData)
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