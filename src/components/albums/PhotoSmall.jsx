import React from 'react';

import NoPhoto from '../../resources/images/no-photo.jpg';

import './css/photo-small.min.css';

export default function PhotoSmall(props) {
    return (
        <a className={'photo_small'} onClick={() => props.openPhoto()}>
            {
                props.photo ? <img src={props.photo} alt={'Img of cover'} /> :
                    <img src={NoPhoto} alt={'Img no photos'} />
            }
        </a>
    )
}