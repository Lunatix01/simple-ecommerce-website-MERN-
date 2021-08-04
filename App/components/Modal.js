import { useEffect } from "react"

const Modal = ({ setIsShowModal, modalContent}) => {
    useEffect(() =>{
        setTimeout(() =>{
            setIsShowModal(false)
        },3000)
    })
    return (
        <div className="transition-all ease-in-out delay-75">
            <h2 className="text-indigo-500">
                {modalContent}
            </h2>
        </div>
    )
}

export default Modal
