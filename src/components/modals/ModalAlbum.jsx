import React, {forwardRef, useImperativeHandle, useState} from 'react'
import {Button, FormGroup, Modal, ModalBody, ModalFooter, ModalHeader, Label, Input} from "reactstrap";
import Swal from 'sweetalert2'
import axios from "axios";
import {processingExceptions} from "../../middleware/processingExceptions";


import Loader from "../loader/Loader";
import InputFiles from "./InputFIles";

import './css/modal-edit.min.css';

const ModalAlbum = forwardRef((props, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [album, setAlbum] = useState({name: ''});
    const [title, setTile] = useState(null);
    const [isNew, setIsNew] = useState(true);
    const [photosSaved, setPhotosSaved] = useState([]);

    useImperativeHandle(ref, () => ({
        open(item = {name: ''}, isNewAlbum = false) {
            setIsOpen(true);
            setAlbum(item);
            setTile(item.name || 'Create album');
            setIsNew(isNewAlbum);

            if(!isNewAlbum) {
                setPhotosSaved(item.photos);
            } else {
                setPhotosSaved([]);
            }
        }
    }));

    const toggle = () => setIsOpen(!isOpen);

    const onSave = () => {
        let item = Object.assign({}, album);

        if(item.name === '') {
            Swal.fire('Please fill name');
            return false;
        }

        if(!item.hasOwnProperty('photos')) {
            item.photos = [];
        }

        setIsLoading(true);

        let params = {
            name: item.name
        };

        let method = 'POST';
        if(!isNew) {
            method = 'PUT';
            params = {
                ...params,
                photos: photosSaved,
                id: item._id
            };
        }

        let form = new FormData();
        for(let photo of item.photos) {
            form.append('photos', photo);
        }

        axios({
            header: {
                'content-type': 'multipart/form-data'
            },
            method: method,
            url: '/api/album',
            params: params,
            data: form

        }).then(() => {
            props.update();
            setIsLoading(false);

            setTimeout(() => {
                setIsOpen(false);
            }, 600);

        }).catch((err) => {
            setIsLoading(false);
            console.error(err);
            Swal.fire(processingExceptions(err));
        })
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
                            onChange={(event) => onChangeName(event)}
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
