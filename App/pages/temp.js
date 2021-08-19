import Navbar2 from "../components/Navbar2"

const temp = () => {
    return (
        <>
        <div>
            <Navbar2/>
        </div>
        
        <div className=" md:mx-28 my-16">
            <div className="flex justify-between ml-8 md:ml-0">
                <div>
                    <div className="flex justify-start">
                        <h1 className="text-4xl font-bold">
                            Dashboard
                        </h1>
                    </div>
                    <div>
                        <hr className="w-20 mt-2 border-indigo-200"/>
                    </div>
                </div>  
            </div>
            <div className="grid md:grid-cols-2 ">
                <div className="w-96 h-96 bg-indigo-700">

                </div>
                <div>

                </div>
            </div>
        </div>
        </>
    )
}

export default temp
