import { useState } from "react"
import Modal from "../components/Modal"
import axios from "axios"
import { setItem } from '../components/localStorage'
import { useRouter } from 'next/router'
const login = () => {
    // send data and verify if its valid or not
    const submitHandler = async (e) => {
        e.preventDefault();
        const query = {
            email,
            password
        }
        const sendData = await axios.post('http://localhost:8000/api/auth/login', query )
        console.log(sendData)
        if (sendData.status === 205) {
            setModalContent("Email or Username is wrong")
        }
        else if (sendData.status === 201) {
            
            setModalContent("Logged in")
            // putting the token to LocalStorage 
            // note:// using LocalStorage is vulnerable to XSS Attacks i recommend using cookie with httpOnly flag
            setItem('token', JSON.stringify(sendData.data.token))
            setIsRedirect(true)
        }
        setIsShowModal(true)
    }
    // states i was just so lazy to use useReducer :P
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ modalContent, setModalContent ] = useState('')
    const [ isShowModal, setIsShowModal ] = useState(false)
    const [ isRedirect , setIsRedirect ] = useState(false)
    const router = useRouter()
    return (
        <div className="mx-auto md:w-8/12 lg:w-6/12 ">
            <div className="centered text-gray-800 text-2xl font-bold">
                <h1>
                    Login To Your Account
                </h1>
            </div>

            <div className="font-bold text-2xl centered mt-1">
                { isShowModal && <Modal modalContent={modalContent} setIsShowModal={setIsShowModal} />}
            </div>
            <div className="hidden">
                {isRedirect && setTimeout(() => { router.push('/products') }, 5000)}
            </div>
            
            
            <div className="w-1/2 mt-5 mx-auto">
                <form>
                    <input type="text" placeholder="Email" required value={email} onChange={(e)=> setEmail(e.target.value)} name="email" id="email"
                    className="appearance-none w-full border border-gray-400 focus:border-indigo-600 focus:outline-none rounded-tr-md rounded-tl-md py-2 px-3"
                    />
                    <input type="password" placeholder="Password" value={password} required onChange={(e) => setPassword(e.target.value)} name="password" id="password"
                        className="appearance-none w-full border border-gray-400 focus:border-indigo-600 focus:outline-none rounded-br-md rounded-bl-md py-2 px-3"
                    />
                    <button type="submit" onClick={submitHandler}
                    className="bg-indigo-700 w-full py-2 px-5 rounded-md my-5 text-white font-semibold hover:bg-indigo-400 transition ease-in"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default login
