import React, {useState} from "react";
import Button from "../button/Button";
import './modal.scss';
import {RiCloseLine} from "react-icons/ri";

const Modal = ({ setIsOpen, method }) => {
    return (
        <>
            <div className="darkBG" onClick={() => setIsOpen(false)}/>
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                        <h5 className="heading">Delete</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setIsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: "-3px" }} />
                    </button>
                    <div className="modalContent">
                        Voules-vous vraiment supprimer cette donnée ?
                    </div>
                    <div className="modalActions">
                        <div className="actionsContainer">
                            <button className="deleteBtn"
                                    onClick={() => method()}
                            >
                                delete
                            </button>
                            <button className="cancelBtn"
                                    onClick={() => setIsOpen(false)}
                                    >
                                cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;