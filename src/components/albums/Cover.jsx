import React from 'react';
import {useDispatch} from 'react-redux';

import NoPhoto from '../../resources/images/no-photo.jpg';

import './css/cover.min.css';

export default function Cover(props) {
    const dispatch = useDispatch();

    let photos;

    if(props.data.hasOwnProperty('photos')) {
        if(Array.isArray(props.data.photos)) {
            photos = props.data.photos || [];
        }
    }

    const openAlbum = () => {
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
            {
                !photos[0] ?
                    <img src={NoPhoto} alt={'Img no photo'} />
                    : <a className={'cover-link'}
                         onClick={() => openAlbum()}
                    >
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