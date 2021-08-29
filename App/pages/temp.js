import Navbar2 from "../components/Navbar2"
import { useState } from "react"
const temp = () => {
    const [ trashColor, setTrashColor ] = useState("text-gray-800")
    const [ plusColor , setPlusColor] = useState("text-gray-800")
    return (
        <div className="h-screen bg-pattern lg:bg-none bg-cover">

        <div>
            <Navbar2/>
        </div>
        <div className="mx-10 md:mx-10 lg:mx-28 my-16 ">
            <div className="flex justify-between ml-8 md:ml-0">
                <div className="mx-auto lg:mx-0">
                    <div className=" lg:justify-start">
                        <h1 className="text-4xl font-bold">
                            Dashboard
                        </h1>
                    </div>
                    <div>
                        <hr className="w-20 mt-2 border-indigo-200"/>
                    </div>
                </div>  
            </div>
            <div className="lg:mx-0 lg:flex relative h-screen">
                <div  className="mt-10 relative -bottom-9 md:hidden">
                    <div  className="bg-indigo-300 opacity-60 rounded-full h-96 w-96  mix-blend-multiply absolute left-20 filter blur-xl animate-blob ">

                    </div>
                    <div  className="bg-pink-400 opacity-60 rounded-full h-96 w-96  mix-blend-multiply absolute  left-30 filter blur-xl animate-blob">

                    </div>
                    <div  className="bg-blue-400 opacity-60 rounded-full h-96 w-96  mix-blend-multiply absolute filter left-60 blur-xl animate-blob">

                    </div>
                </div>
                {/* Add and remove product container */}
                 <div className="md:w-full mx-auto lg:mx-0">
                    <div className="bg-indigo-500 mx-auto lg:mx-0 md:bg-white md:border-dashed md:border-indigo-600 md:border-4 shadow-lg rounded md:w-96 h-96 lg:w-1/3 lg:h-2/4 my-10  p-10 lg:p-24 items-center z-10 ">
                    {/* HEADER */}
                    <div className="flex justify-center">
                         <h1 className="font-semibold text-lg text-white md:text-black md:text-2xl">
                             Add/Remove Product
                         </h1>
                     </div>
                     {/* ADD and REMOVE BUTTONS */}
                     <div className="flex justify-around pt-24">
                        <div className="bg-green-50 rounded-md h-16 w-16  flex items-center justify-center hover:cursor-pointer bg-opacity-20 z-10 hover:scale-110 transition-all ease-in" onMouseOver={()=> setPlusColor("text-green-500")} onMouseOut={()=>setPlusColor("text-gray-800")}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8  ${plusColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                        <div className="bg-green-50 rounded-md h-16 w-16 flex items-center justify-center hover:cursor-pointer bg-opacity-20 z-10 hover:scale-110 transition-all ease-i" onMouseOver={()=> setTrashColor("text-red-500")} onMouseOut={()=>setTrashColor("text-gray-800")}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8  ${trashColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </div>
                     </div>
                    </div>
                 </div>
                <div className="mx-auto w-full h-1/3 border-4 border-indigo-600 border-dashed md:w-2/4 lg:w-1/4 lg:h-2/3 rounded-md">
                    <div>
                        <h1>
                            
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default temp
