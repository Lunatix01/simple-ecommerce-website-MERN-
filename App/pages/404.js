import { motion } from 'framer-motion'
import Link from 'next/link'
const Custom404 = () => {
    return (
        <>
            <div className="centered text-5xl font-semibold">
                <h1 className="">The page you're looking for can't be found</h1>
            </div>
            <div  className="centered text-xl font-semibold m-14 text-white hover:text-gray-200">
                <Link href="/">
                    <motion.a whileHover={{scale: 1.1,transition: { duration: 1 },}} whileTap={{ y: 1000, opacity: 1  }} transition={{ type: "tween", stiffness: 1000 }} className="btn cursor-pointer">
                        Home
                    </motion.a>
                </Link>
            </div>
        </>
    )
}

export default Custom404
