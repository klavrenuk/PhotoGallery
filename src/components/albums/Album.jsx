import React from 'react';
import Cover from "./Cover";
import PhotoSmall from "./PhotoSmall";

import './css/album.min.css';

export default function Album(props) {
    const album = props.data;

    if (props.isCover) {
        return <Cover data={album}/>
    }

    const openPhoto = () => {
        console.log('openPhoto');
    }

    return (
        <div className={'album'}>
            <h4 className={'album-title'}>{album.name}</h4>
            {
                !album.photos[0] ?
                    <h4 className={'album-no_photo'}>No Photo</h4>
                    :
                    <div className={'album-photos'}>
                        {
                            album.photos.map((photo, key) => {
                                return (
                                    <div className={'album-photos-photo'}>
                                        <PhotoSmall photo={photo} openAlbum={openPhoto}/>
                                    </div>
                                )
                            })
                        }
                    </div>
            }
        </div>
    )
}