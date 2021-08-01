import { FaConnectdevelop } from "react-icons/fa";
import { motion } from "framer-motion"
import links from "../objects/links"
import {useState} from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)
    return (
            <div className="block w-1000 text-md md:flex items-center justify-between font-roboto md:text-2xl font-semibold">
            <motion.div className="hidden md:flex" whileHover={{ scale: 0 }} whileHover={{ rotate: 180, scale: 1 }} transition={{type: "spring", stiffness: 260,damping: 2}}>
                    <Link href="/">
                        <a><FaConnectdevelop className="md:w-10 h-10 text-indigo-600" /></a>
                    </Link>
            </motion.div>
            <div>
                <ul className="hidden md:flex justify-start items-center ">
                    {links.map((link)=>{
                        return (
                            link.name !== "Login" ? <li className="mx-8 transition ease-in-out text-gray-400 hover:text-gray-700"><Link href={link.url} >{link.name}</Link></li> : console.log('meow')
                        )
                    })}
                </ul>
            </div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="hidden md:flex  md:text-lg rounded-md shadow md:py-1 md:px-4">
                <Link className="inline md:centered transition ease-in items-center" href={links[links.length - 1].url}>
                    <a className="text-indigo-600">{links[links.length - 1].name}</a>
                </Link>
            </motion.div>
            <div className="text-lg inline md:hidden cursor-pointer" onClick={()=> setIsOpen(!isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            {isOpen ? 
            <div>
                <div className="mx-8 mt-4">
                    
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                        </Link>
                    
                </div>
            <div>
                <ul>
                        {links.map((link) => {
                            return (
                                <li className="mx-8 mt-4 transition ease-in-out text-gray-400 hover:text-gray-700"><Link href={link.url}><a>{link.name}</a></Link></li>
                            )
                        })}
                    
                </ul>
                    </div></div>:console.log("fk")}
        </div>
        
    )
}

export default Navbar
