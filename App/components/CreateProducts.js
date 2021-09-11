import axios from "axios"
import { useState , useContext } from "react";
import { modalContext } from "../pages/temp2";

const CreateProducts = () => {
    const { modalState } = useContext(modalContext)
    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ price, setPrice ] = useState(0)
    const sendProductData = async(e) =>{
        try {
            e.preventDefault();
            let cred = window.localStorage.getItem('token')
            cred = JSON.parse(cred)
            let token = 'Bearer ' + cred
            const query = {
                title,
                description,
                price
            }
            console.log(query)
            const response = await axios({method:"post", url: "http://localhost:8000/api/product", data: query , headers: { 'auth-token' : token } })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        
        <div className="flex justify-center w-full">
                    <div className="h-96 w-2/3 lg:w-1/4 bg-indigo-500 my-12 rounded-lg fixed p-10 shadow-lg">
                    <div className="absolute right-7 top-1 hover:cursor-pointer" onClick={ () => modalState[1](false) } >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    
                        <form>
                            <div className="flex flex-col items-center gap-3 md:gap-6 w-full pl-16">
                                <div className="xl:w-full w-48">
                                    <input type="text" name="title" placeholder="Title" className="appearance-none w-3/4 h-8 border-white border-2 rounded-md focus:outline-none focus:border-indigo-600 p-2" value={title} onChange={(e) => setTitle(e.target.value)}/>
                                </div>
                                <div className="xl:w-full w-48">
                                    <textarea name="description" placeholder="Description" rows="5" className="appearance-none w-3/4 border-white border-2 rounded-md focus:outline-none focus:border-indigo-600 resize-none p-2" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                </div>
                                <div className="xl:w-full w-48">
                                    <input type="text" name="price" placeholder="Price" className="appearance-none w-3/4 border-white border-2 rounded-md focus:outline-none focus:border-indigo-600 p-2" value={price} onChange={(e) => setPrice(parseInt(e.target.value))}/>
                                </div>
                            </div>
                            <div className="flex justify-center mt-5 w-full">
                                <button className="bg-white rounded-lg h-10 w-32 animate__animated animate__fadeIn text-indigo-500 text-lg font-semibold hover:bg-indigo-700 hover:text-white hover:transition hover:ease-in-out" onClick={sendProductData}>
                                    Add product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
        
    )
}

export default CreateProducts
