import React from 'react';

import NoPhoto from './images/no-photo.jpg';

import './css/cover.min.css';

export default function Cover(props) {
    let photos;

    if(props.data.hasOwnProperty('photos')) {
        if(Array.isArray(props.data.photos)) {
            photos = props.data.photos || [];
        }
    }

    return (
        <div className={'cover'}>
            {
                !photos[0] ?
                    <img src={NoPhoto} alt={'Img no photo'} />
                    : <a className={'cover-link'}>
                        <img src={photos[0]} alt={'Img of cover'} />
                    </a>

            }

            <div className={'cover-bottom'}>
                <span>{ props.data.name || '' }</span>
                <span>{ photos.length }</span>
            </div>
        </div>
    )
}