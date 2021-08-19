import { FaConnectdevelop } from "react-icons/fa";
import Link from 'next/link'
import { motion } from "framer-motion"
import Image from "next/image"
import Noodles from "../public/noodles.svg"
const links = ['Products' , 'Sign out']
const Navbar2 = () => {
    return (
        <div className="h-18 bg-indigo-700 flex justify-between py-4 px-8 md:px-20 rounded-b-sm">
            <motion.div className=" "  whileHover={{  rotate: 360 }} transition={ {type: "spring", stiffness: 260,damping: 2}}>
                <Link href="/">
                    <a><FaConnectdevelop className="w-8 md:w-10 h-10 text-white" /></a>
                </Link>
            </motion.div>
            <motion.div className="flex justify-around items-center">
                {
                    links.map((link)=>{
                        return <div className="mr-12 "> 
                                    <Link href="/products">
                                        <a className="text-gray-400 hover:text-gray-50 text-lg font-semibold">{link}</a>
                                    </Link>
                                </div>
                    })
                }
                
                <div className="flex justify-end">
                    <div className="bg-indigo-200 w-10 rounded-full h-10 hover:cursor-pointer overflow-hidden relative ">
                        <div className="ml-1">
                            <Image src={Noodles} alt="Noodles" />
                        </div>
                        
                    </div>
                </div>
                
            </motion.div>
        </div>
    )
}

export default Navbar2
