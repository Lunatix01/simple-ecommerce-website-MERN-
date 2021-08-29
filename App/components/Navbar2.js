import { FaConnectdevelop } from "react-icons/fa";
import Link from 'next/link'
import { motion } from "framer-motion"
import Image from "next/image"
import Noodles from "../public/noodles.svg"
import { useState } from "react";
import 'animate.css'
const links = [{
    name: 'Products',
    link: "/products" 
},{
    name: 'Sign out',
    link: "/logout" 
}]
const Navbar2 = () => {
    const [ isShowNav , setIsShowNav ] = useState(false)
    return (
        <div className="h-18 bg-indigo-700 flex justify-between py-4 px-8 md:px-20 rounded-b-sm">
            <motion.div className=" "  whileHover={{  rotate: 360 }} transition={ {type: "spring", stiffness: 260,damping: 2}}>
                <Link href="/">
                    <a><FaConnectdevelop className="w-8 md:w-10 h-10 text-white" /></a>
                </Link>
            </motion.div>
            <motion.div className="md:flex justify-around items-center">
                <div className="hidden md:flex justify-around items-center">
                {
                    links.map((link)=>{
                        return <div className="mr-12 "> 
                                    <Link href={link.link}>
                                        <a className="text-gray-400 hover:text-gray-50 text-lg font-semibold">{link.name}</a>
                                    </Link>
                                </div>
                    })
                }
                </div>
                <div className="flex justify-end relative">
                    <div className="bg-indigo-200 w-10 rounded-full h-10 hover:cursor-pointer overflow-hidden relative" onClick={() => setIsShowNav(!isShowNav)}>
                        <div className="ml-1">
                            <Image src={Noodles} alt="Noodles" />
                        </div>
                        
                    </div>
                    <div className={isShowNav ? "animate__animated animate__zoomIn md:hidden absolute top-12 bg-indigo-600 w-36 h-36 flex justify-center py-3 rounded-lg shadow-xl" : "hidden animate__animated "}>
                        <div className="w-full">   
                            <div className="w-full align-middle p-2 ">
                                {
                                links.map((link)=>{
                                    return <div className="w-full my-3 px-2 hover:bg-indigo-700 rounded-lg"> 
                                        <Link href={link.link} className="w-full">
                                            <a className="text-gray-400  hover:transition hover:ease-in-out inline-block h-8 hover:text-gray-50 text-lg font-semibold w-full  rounded-lg">{link.name}</a>
                                        </Link>
                                    </div>
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                
            </motion.div>
        </div>
    )
}

export default Navbar2
