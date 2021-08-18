import { getItem } from "../components/localStorage"
import axios from "axios"
import { useState,useEffect } from "react"

const profile = () => {
    const [ isAuthorized , setIsAuthorized ] = useState(false)
    const ISSERVER = typeof window === "undefined";
    const checkUser = async () =>{
        const cred = window.localStorage.getItem('token')
        try {
            
            const token = JSON.parse(cred)
            if(!token) setIsAuthorized(false)
            const header = "Bearer " + token
            const response = await axios({method:"post", url: "http://localhost:8000/api/auth/checkjwt",  headers: { 'auth-token' : header } } )
            if(response.status=== 201 ){
                setIsAuthorized(true)
            }
        } catch (error) {
            console.log(error)
        }
    }
    if(!ISSERVER) {
        // Access localStorage
        useEffect(() => {
            checkUser()
        }, [])
    }
        if(!isAuthorized){
            return <div className="centered">
                <h1>
                    ACCESS DENIED
                </h1>
                </div>
                }
                else {
                    return <div className="flex justify-start">
                        <h1 className="text-4xl font-semibold">
                            Profile
                        </h1>
                    </div>
                }
        
        
        
        
    
}

export default profile
