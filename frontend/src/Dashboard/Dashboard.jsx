import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";




function Dashboard() {
    
    const {user, setUser} = useContext(UserContext)


    useEffect(() => {
        const url="http://localhost:5000/auth/verify-session"
        const checkSession = async () => {
            try {
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                })

                const data = await response.json()
                if (response.ok) {
                    console.log(data)
                    setUser({
                        id: data.user.id,
                        username: data.user.name
                    })
                } else {
                    if (data.url) {
                        window.location.pathname = data.url    
                    } else {
                        window.location.pathname = "/"    
                    }             
                    
                }
            }
            catch (error) {
                
                console.log(error)
            }

        }

        checkSession()
        console.log(user)
    }, [])

    const handleDellUser = async () => {

        const url = "http://localhost:5000/auth/del"
        try {
            const response = await fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })

            const data = await response.json()

            if (response.ok) {
                console.log(data)
                console.log("User Deleted")
            } else {
                console.log("Error")
            }
        }
        catch (error) {
            console.log(error)
        }

    }


    return (
        <>
            <h1>Welcom {user.username}</h1>

            <button onClick={handleDellUser} >Del User</button>
        </>
    )
}


export default Dashboard