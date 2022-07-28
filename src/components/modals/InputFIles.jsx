import React, {useState} from 'react';
import {Button} from "reactstrap";


export default function InputFiles(props) {
    const [photos, setPhotos] = useState([]);

    console.log('props', props);

    const onAddFiles = (event) => {
        let files = [...event.target.files];

        files = files.filter((file) => {
            if(file.type.match('image.*')) {
                return file;
            }
        });

        setPhotos(files);
    }


    return(
        <div className={'input_files'}>
            <div className={'input_files-top'}>
                <Button color={'primary'}>AddPhoto</Button>
                <input
                    id="Files"
                    type="file"
                    className={'modal_edit-input_photo'}
                    multiple="multiple"
                    onChange={(event) => onAddFiles(event)}
                />
            </div>
            <div>
                {
                    photos.map((photo, index) => {
                        return (
                            <div className={'input_files-photo'} key={index}>
                                { photo.name }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}