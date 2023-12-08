import React from "react";
import { Modal } from "react-bootstrap";
import './index.scss';


interface ZoomModalInterface {
    data: any
    isOpen: boolean;
    // onClose: () => void;
    size?: "xl" | "sm" | "lg";
}

const ZoomModal = ({
    data,
    // onClose,
    isOpen,
    size = "lg",
}: ZoomModalInterface) => {
    console.log("Data=======> Modal", data)
    return (
        <Modal show={isOpen} size={size} className="modal" backdrop={true}>
        <Modal.Body>
            <div className="modal-body">
                <p>{data.data}</p>
                <img src={data.image}  />
            </div>
        </Modal.Body>
    </ Modal>

        // <div className={`modal ${isOpen ? 'open' : ''}`}>
        //     <div className="modal-content">
        //         <p>{data.data}</p>
        //     </div>
        // </div>
    )
}


export default ZoomModal;