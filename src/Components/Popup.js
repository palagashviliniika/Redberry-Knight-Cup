import React from 'react';
import {Modal, ModalClose, ModalHeader, ModalTitle, ModalTxt} from "./LandingElements";

const Popup = ({handleClose}) => {
    return (
        <Modal>
            <ModalHeader>
                <ModalTitle>
                    Popup
                </ModalTitle>
                <ModalClose onClick = {handleClose} >
                    &times;
                </ModalClose>
            </ModalHeader>

            <ModalTxt>
                asd
            </ModalTxt>
        </Modal>
    );
};

export default Popup;