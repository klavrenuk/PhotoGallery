import React, {forwardRef, useImperativeHandle, useState, useRef} from 'react'
import {Button, FormGroup, Modal, ModalBody, ModalFooter, ModalHeader, Label, Input, Form} from "reactstrap";

import Loader from "../loader/Loader";
import InputFiles from "./InputFIles";

import './css/modal-edit.min.css';

const ModalEdit = forwardRef((props, ref) => {
    const [isOpen, setIsOpen] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [album, setAlbum] = useState({
        name: 'France'
    });
    const [title, setTile] = useState(null);
    const [newPhotos, setNewPhotos] = useState([]);

    useImperativeHandle(ref, () => ({
        open(album) {
            setIsOpen(true);
            setAlbum(album);
            setTile(album.name || '');
        }
    }));

    const toggle = () => setIsOpen(!isOpen);

    const onSave = () => {
        setIsLoading(true);
        console.log('saving...', album);
    }

    const onChangeFiles = (event) => {
        newPhotos(newPhotos.concat(event.target.files));
    }

    const onChangeName = (event) => {
        setAlbum({
            ...album,
            name: event.target.value
        });
    }

    return (
        <Modal className={'modal_edit'}
               isOpen={isOpen}
               toggle={toggle}
               size={'md'}
        >
            {
                isLoading ? <Loader type={'modal'} /> : null
            }

            <ModalHeader toggle={toggle}>Edit {title}</ModalHeader>

            <ModalBody>
                <form className={'modal_edit-form'}>
                    <FormGroup>
                        <Label for={'AlbumName'}>Album name</Label>
                        <Input
                            id={'AlbumName'}
                            type="text"
                            name="name"
                            value={album.name}
                            onChange={() => onChangeName(event)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <InputFiles />
                    </FormGroup>
                </form>
            </ModalBody>

            <ModalFooter>
                <Button color="link" onClick={toggle}>cancel</Button>
                <Button color="primary" onClick={onSave}>save</Button>
            </ModalFooter>
        </Modal>
    )
});

export default ModalEdit;
