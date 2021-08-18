import React from 'react'

const temp = () => {
    return (
        <div>
            <div className="flex justify-between">
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
                <div className="flex justify-end">
                    <div className="bg-indigo-200 w-16 rounded-full h-16 -mt-14">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default temp
