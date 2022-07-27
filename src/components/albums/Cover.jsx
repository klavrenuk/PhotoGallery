import React from 'react';
import {useDispatch} from 'react-redux';

import PhotoSmall from "./PhotoSmall";

import './css/cover.min.css';

export default function Cover(props) {
    const dispatch = useDispatch();

    let photos;

    if(props.data.hasOwnProperty('photos')) {
        if(Array.isArray(props.data.photos)) {
            photos = props.data.photos || [];
        }
    }

    const openPhoto = () => {
        dispatch({
            type: 'photoCarousel',
            value: {
                isShow: true,
                photos: photos
            }
        })
    }

    return (
        <div className={'cover'}>
            <PhotoSmall photo={photos[0]} openPhoto={openPhoto} />

            <div className={'cover-bottom'}>
                <span>{ props.data.name || '' }</span>
                <span>{ photos.length }</span>
            </div>
        </div>
    )
}