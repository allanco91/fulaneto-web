import React from 'react';

import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'

interface IAppModalImageProps {
    imageTitle: string;
    image: string;
    show: boolean;
}

export const AppModalImage: React.FC<IAppModalImageProps> = (props) => {

    const [show, setShow] = React.useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    return (
        <>
            <Modal
                show={props.show}
                onHide={handleClose}
                dialogClassName="modal-90w"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{props.imageTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={props.image} fluid />
                </Modal.Body>
            </Modal>
        </>
    );
}