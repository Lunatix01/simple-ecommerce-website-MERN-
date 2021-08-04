import { useState } from "react"
import Modal from "../components/Modal"
import axios from "axios"
const login = () => {
    // check login
    const submitHandler = async (e) => {
        e.preventDefault()
        const query = {
            email,
            password
        }
        
        const response = await axios.post('http://localhost:8000/api/auth/login', query )
        if (response.status === 205) {
            setModalContent("Email or Username is wrong")
        }
        else {
            setModalContent("Logged in")
        }
    }
    // states i was just so lazy to use useReducer :P
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [modalContent, setModalContent] = useState('')
    const [isShowModal, setIsShowModal] = useState(false)
    return (
        <div className="mx-auto  md:w-8/12 lg:w-6/12 ">
            <div className="centered text-gray-800 text-2xl font-bold">
                <h1>
                    Login To Your Account
                </h1>
            </div>
            {isShowModal && <Modal modalContent={modalContent} setIsShowModal={setIsShowModal} /> }
            <div className="w-1/2 mt-5 mx-auto">
                <form>
                    <input type="text" placeholder="Email" required value={email} onChange={(e)=> setEmail(e.target.value)} name="email" id="email"
                    className="appearance-none w-full border border-gray-400 focus:border-indigo-600 focus:outline-none rounded-tr-md rounded-tl-md py-2 px-3"
                    />
                    <input type="text" placeholder="Enter Password" required
                        className="appearance-none w-full border border-gray-400 focus:border-indigo-600 focus:outline-none rounded-br-md rounded-bl-md py-2 px-3"
                    />
                    <button type="submit" onSubmit={submitHandler}
                    className="bg-indigo-700 w-full py-2 px-5 rounded-md my-5 text-white font-semibold hover:bg-indigo-400"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default login
