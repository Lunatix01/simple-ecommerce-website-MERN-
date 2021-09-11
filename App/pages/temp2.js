import Navbar2 from "../components/Navbar2"
import CreateProducts from "../components/CreateProducts"
import React , { useEffect , useRef , useState } from "react"

export const modalContext = React.createContext()

const temp2 = () => {
    let [ isOpen , setIsOpen ] = useState(false)
    const ref = useRef(null)
    useEffect( () => {
        if(ref){
        let handler = (event) => {
            if(!ref.current || !ref.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown" , handler )
        
        return  () =>{
            document.removeEventListener("mousedown", handler )
        }
    }},[ref])

    return (
        <>
            <div>
                <Navbar2/>
            </div>
            <div className="py-12 px-32">
                <div className="flex justify-center md:justify-start">
                    <button onClick={ ()=> setIsOpen(!isOpen) } className="bg-indigo-600 rounded-lg h-10 w-32  hover:animate__animated hover:animate__pulse text-white md:text-lg font-semibold hover:bg-indigo-500 hover:transition hover:ease-in-out">
                        Add product
                    </button>
                </div>
                <modalContext.Provider value={ { modalState : [ isOpen,setIsOpen ] } }>
                { isOpen && <div ref={ref}> <CreateProducts/> </div>}
                </modalContext.Provider>
            </div>
        </>
    )
}

export default temp2
