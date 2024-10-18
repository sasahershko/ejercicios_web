import React from 'react';
import '../styles/modal.css';

export default function Modal({open, close, title, children}){

    if(!isOpen) return null;

    return(
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <h2>{title}</h2>
                    <button className="close-button" onClick={close}>×</button>
                </div>
                <div className="modal-content">
                    {children}
                </div>
                <div className="modal-footer">
                    <button className="close-button" onClick={close}>Cerrar</button>
                    <button className="save-button" onClick={close}>Accionr</button>
                </div>
            </div>
        </div>
    );
}