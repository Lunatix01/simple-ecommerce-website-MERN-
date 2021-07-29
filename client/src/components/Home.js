import {BrowserRouter as Router,Link} from 'react-router-dom'
import { motion } from "framer-motion"
const Home = () => {
    return (
        <div>
            <div className="centered mb-10">
                <h1 className=" text-3xl md:text-7xl text-bold font-roboto">Digital selling with ease</h1>
            </div>
            <div className="text-center centered text-lg md:text-2xl text-gray-500">
                <span >
                    You provide the products on ecommerce, we take care of the rest.
                </span>
            </div>
            <div className="centered text-lg md:text-2xl text-gray-500 mb-10">
                <span>
                    Day and night.
                </span>
            </div>
            <Router>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-30 centered mb-10 text-2xl text-white">
                    <Link to="/register" className="text-bold transition ease-in-out rounded-md bg-indigo-600 py-4 px-7 hover:bg-indigo-400">Get Started</Link>
                </motion.div>
            </Router>
            
        </div>
    )
}

export default Home
