import React, {forwardRef, useImperativeHandle, useState} from 'react'
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, Alert} from "reactstrap";
import {processingExceptions} from "../../middleware/processingExceptions";
import Swal from "sweetalert2";

import Loader from "../loader/Loader";


const ModalConfirmDelete = forwardRef((props, ref) => {
    const [isShow, setIsShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [album, setAlbum] = useState({});
    const [message, setMessage] = useState(null);
    const [isSaved, setIsSaved] = useState(false);

    useImperativeHandle(ref, () => ({
        open(album) {
            setIsShow(true);
            setAlbum(album);
            setIsSaved(false);
        }
    }));

    const toggle = () => setIsShow(!isShow);

    const onAccept = async () => {
        try {
            setIsLoading(true);
            console.log('save');

            await props.remove(album);
            props.update();
            setIsSaved(true);
            setMessage(null);
            setIsLoading(false);

        } catch (err) {
            console.error(processingExceptions(err));
            setMessage('Server error. Please, try later');
            setIsSaved(true);
            setIsLoading(false);

        }
    }

    return (
        <Modal className={'modal_confirm'}
               isOpen={isShow}
               toggle={toggle}
               size={'md'}
        >
            {
                isLoading ? <Loader type={'modal'}/> : null
            }

            <ModalHeader toggle={toggle}>Confirm</ModalHeader>

            <ModalBody>

                <div className={'text-center'}>
                    {
                        !isSaved ?
                            <p>Are you ready remove album <b>{album.name}</b></p>
                            :
                            <Alert color={message ? 'danger' : 'success'}>
                                {message ? message : 'Success'}
                            </Alert>
                    }
                </div>

            </ModalBody>

            <ModalFooter>
                <Button color="link" onClick={toggle}>cancel</Button>
                {
                    isSaved && !message ?
                        null
                        :
                        <Button color="primary" onClick={onAccept}>yes</Button>
                }

            </ModalFooter>
        </Modal>
    )
});

export default ModalConfirmDelete;
