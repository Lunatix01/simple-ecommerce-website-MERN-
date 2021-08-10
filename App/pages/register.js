import axios from 'axios'
import { useState } from 'react'
import Modal from '../components/Modal'
import { setItem } from '../components/localStorage'
const Register = () => {
    const [ username, setUsername ] = useState('')
    const [ email , setEmail ] = useState('')
    const [ password , setPassword ] = useState('')
    const [ modalContent, setModalContent ] = useState('')
    const [ isShowModal , setIsShowModal ] = useState(false)
    const sendPostData = async (e) => {
        e.preventDefault();
        const post = await axios.post('http://localhost:8000/api/auth/register',{
            username,
            email,
            password
        })
        if(post.status === 205){
            setModalContent("Email or Username exists")
        }
        else{
            setModalContent("Account successfuly created")
        }
        setIsShowModal(true)
    }
    return (
        <div className="my-15 mx-auto md:w-80  ">
            <div className="font-bold text-2xl centered mt-1">
                <h1 className="">
                    WELCOME TO SHOPPER
                </h1>
            </div>
            <div className="font-bold text-2xl centered mt-1">
                {isShowModal && <Modal setIsShowModal={setIsShowModal} modalContent={modalContent} />}
            </div>
            <div className="w-75 md:block md:mx-auto mt-5 md:w-full">
                <form>
                    <div className="">
                    <input
                            className="appearance-none w-full relative px-4 py-2 rounded-tr-md rounded-tl-md border-gray-300 border focus:outline-none  focus:border-indigo-600"
                        type="text" name="username" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="w-full">
                    <input 
                    className="appearance-none w-full relative px-4 py-2 border-gray-300 border focus:outline-none  focus:border-indigo-600"
                            type="email" name="email" id="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <input className="appearance-none w-full relative px-4  py-2 rounded-br-md rounded-bl-md border-gray-300 border focus:outline-none  focus:border-indigo-600"
                            type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="mt-5 w-full">
                    <button type="submit" 
                        className="appearance-none text-sm transition w-full ease-in font-semibold text-white  rounded border-gray-300 border focus:outline-none  focus:border-indigo-600 bg-indigo-600 py-2 px-20 hover:bg-indigo-400"
                        onClick={sendPostData}
                        >
                        Sign up
                    </button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Register