import React from 'react';
import {onErrorLoading} from "../../middleware/photo";

import NoPhoto from '../../resources/images/no-photo.jpg';

import './css/photo-small.min.css';

export default function PhotoSmall(props) {
    return (
        <a className={'photo_small'} onClick={() => props.openPhoto(props.indexPhoto)}>
            {
                props.photo ? <img src={'/uploads/' + props.photo}
                                   alt={'Img of cover'}
                                   onError={(event) => onErrorLoading(event)}
                    /> :
                    <img src={NoPhoto} alt={'Img no photos'} />
            }
        </a>
    )
}