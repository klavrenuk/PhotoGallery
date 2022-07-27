import React, {forwardRef, useImperativeHandle, useState} from 'react'
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

import Loader from "../loader/Loader";


const ModalConfirmDelete = forwardRef((props, ref) => {
    const [isShow, setIsShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [album, setAlbum] = useState({});

    useImperativeHandle(ref, () => ({
        open(album) {
            setIsShow(true);
            setAlbum(album);
        }
    }));

    const toggle = () => setIsShow(!isShow);

    const onSave = () => {
        setIsLoading(true);
        console.log('save');
    }

    return (
        <Modal className={'modal_event'}
               isOpen={isShow}
               toggle={toggle}
               size={'md'}
        >
            {
                isLoading ? <Loader type={'modal'} /> : null
            }

            <ModalHeader toggle={toggle}>Confirm</ModalHeader>

            <ModalBody>
                <p>Are you ready remove album <b>{album.name}</b>?</p>
            </ModalBody>

            <ModalFooter>
                <Button color="link" onClick={toggle}>cancel</Button>
                <Button color="primary" onClick={onSave}>yes</Button>
            </ModalFooter>
        </Modal>
    )
});

export default ModalConfirmDelete;
