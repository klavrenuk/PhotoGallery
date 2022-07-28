import React, {forwardRef, useImperativeHandle, useState} from 'react'
import {Button, FormGroup, Modal, ModalBody, ModalFooter, ModalHeader, Label, Input} from "reactstrap";

import Loader from "../loader/Loader";
import InputFiles from "./InputFIles";

import './css/modal-edit.min.css';

const ModalAlbum = forwardRef((props, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [album, setAlbum] = useState({});
    const [title, setTile] = useState(null);

    useImperativeHandle(ref, () => ({
        open(album = {}) {
            setIsOpen(true);
            setAlbum(album);
            setTile(album.name || 'Create album');
        }
    }));

    const toggle = () => setIsOpen(!isOpen);

    const onSave = () => {
        setIsLoading(true);
        console.log('saving...', album);
        setIsLoading(false);
    }

    const onChangePhotos = (photos) => {
        setAlbum({
            ...album,
            photos: photos
        })
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

            <ModalHeader toggle={toggle}>{title}</ModalHeader>

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
                        <InputFiles onChangePhotos={onChangePhotos} />
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

export default ModalAlbum;