import React, {useState, useRef} from 'react';
import {Button} from "reactstrap";

import {HiOutlineTrash} from "react-icons/hi";

import './css/input-files.min.css';


export default function InputFiles() {
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

        console.log('files', files);

        setPhotos(photos.concat(files));
    }

    const removePhoto = index => photos.splice(index, 1);

    const toggleFileInput = () => RefInputFile.current.click();


    return (
        <div className={'input_files'}>
            <div className={'input_files-top'}>
                <Button color={'primary'}
                        onClick={() => toggleFileInput()}
                >AddPhoto</Button>
                <input type="file"
                       className={'modal_edit-input_photo'}
                       multiple="multiple"
                       accept={'image/*'}
                       ref={RefInputFile}
                       onChange={(event) => addFiles(event)}
                />
            </div>
            <div>
                {
                    photos.map((photo, index) => {
                        return (
                            <div className={'input_files-photos'} key={index}>
                                <img src={photo.src} alt={`Photo ${photo.name}`}/>
                                <Button color={'icon'}
                                        className={'photo_remove'}
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