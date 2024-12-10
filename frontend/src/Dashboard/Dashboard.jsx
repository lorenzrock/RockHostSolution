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
                    console.log("Still loged in")
                }
            }
            catch (error) {
                console.log(error)
            }

        }

        checkSession()
        console.log(user)
    }, [user])

    return (
        <>
            <h1>Welcom {user.username}</h1>
        </>
    )
}


export default Dashboard