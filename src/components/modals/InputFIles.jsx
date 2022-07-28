import React, {useState, useRef} from 'react';
import {Button} from "reactstrap";

import {HiOutlineTrash} from "react-icons/hi";

import './css/input-files.min.css';


export default function InputFiles(props) {
    const [photos, setPhotos] = useState([]);

    const RefInputFile = useRef();

    const addFiles = (event) => {
        let files = [...event.target.files];

        files = files.filter((file) => {
            if (file.type.match('image.*')) {
                file.src = URL.createObjectURL(file)
                return file;
            }
        });

        setPhotos(photos.concat(files));
        props.onChangePhotos(photos.concat(files))
    }

    const removePhoto = index => {
        const arr = [...photos];
        arr.splice(index, 1);
        setPhotos(arr)
        props.onChangePhotos(arr)
    }

    const toggleFileInput = () => RefInputFile.current.click();


    return (
        <div className={'input_files'}>
            <Button color={'primary'}
                    className={'input_files-add'}
                    onClick={() => toggleFileInput()}
            >AddPhoto</Button>
            <input type="file"
                   className={'modal_edit-input_photo'}
                   multiple="multiple"
                   accept={'image/*'}
                   ref={RefInputFile}
                   onChange={(event) => addFiles(event)}
            />

            <div>
                {
                    photos.map((photo, index) => {
                        return (
                            <div key={index} className={'modal_edit-photo'}>
                                <img src={photo.src}
                                     alt={`Photo ${photo.name}`}
                                />
                                <Button color={'icon'}
                                        className={'modal_edit-photo-remove'}
                                        onClick={() => removePhoto(index)}
                                >
                                    <HiOutlineTrash/>
                                </Button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}