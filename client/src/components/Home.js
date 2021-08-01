import {BrowserRouter as Router,Link} from 'react-router-dom'
import { motion } from "framer-motion"
const Home = () => {
    return (
        <div className="relative">
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

            <button className="absolute left-2/4 transform -translate-x-2/4 mb-10 text-2xl text-white">
                <Router>
                    <Link to="/register" className="relative text-bold transition ease-in-out rounded-md   bg-indigo-600 py-3 px-7 hover:bg-indigo-400">Get Started <span className="absolute -right-1 -top-111 w-3 h-3 rounded-lg bg-white animate-ping"></span></Link>
                    
                </Router>
            </button>
            
        </div>
    )
}

export default Home
