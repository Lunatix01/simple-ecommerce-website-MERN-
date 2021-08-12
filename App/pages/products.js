import axios from 'axios'
import image from '../public/product_default.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion'
export async function getStaticProps() {
    const fetchData = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const data = fetchData.data
    return {
        props: {
            data
        },
        revalidate : 10
    }
}

const products = ({data}) => {
    console.log(data)
    return (
        <>
        <div className="">
            <div>
                <div className="centered my-12">
                    <h1 className="text-5xl font-semibold ">
                        Products
                    </h1>
                </div>
                
                <div className="centered">
                        <div className="grid gap-10 lg:grid-cols-2 lg:grid-rows-3 lg:gap-16 xl:grid-cols-3 xl:grid-rows-3 xl:gap-16">
                        {
                            data.map((product) => {
                                return (
                                    <div className="bg-white w-80 h-96 rounded overflow-hidden shadow-lg hover:bg-gray-50">
                                        <Image src={image} alt="default" className="w-full"/>
                                        <div className="p-5">
                                            <h2 className="font-semibold">
                                                {
                                                    product.title
                                                }
                                            </h2>
                                        </div>
                                        
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default products
