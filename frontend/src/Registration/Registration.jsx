import { useState } from "react";

function Registration() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [birthday, setBirthday] = useState("")
    const [consent, setConsent]  = useState(false)


    
    const handleSubmit = async (e) => {
        e.preventDefault();


        const formData = {
            username: username,            
            email: email,
            password: password,
            birthday: birthday,
            consent: consent

        }

        const url = "http://localhost:5000/auth/registration"
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const responseData = await response.json()

            if (response.ok) {
                console.log("Login ok")
                console.log(responseData)
            } else {
                throw new Error("Error: " + responseData.message)
                
            }


        }

        catch (error) {
            console.log(error.message)
        }
        
    }




    return (<>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter: Username" onChange={(e) => setUsername(e.target.value)} value={username}></input>
                <input type="email" placeholder="Enter: Email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <input type="password" placeholder="Enter: Password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
                <input type="date" onChange={(e) => setBirthday(e.target.value)} value={birthday} ></input>
                <input type="checkbox" onChange={(e) => setConsent(e.target.checked)} value={consent} ></input>
                <input type="Submit" ></input>
            </form>

        </div>
    </>)
}


export default Registration
