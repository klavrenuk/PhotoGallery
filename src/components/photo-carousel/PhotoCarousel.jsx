import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {Button} from 'reactstrap';

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import './css/photo-carousel.min.css';


export default function PhotoCarousel() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const [isShow, setIsShow] = useState(false);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        if(state.photoCarousel) {
            setIsShow(state.photoCarousel.isShow);

            if(state.photoCarousel.isShow) {
                setPhotos(state.photoCarousel.photos);
            }
        }

    }, [state]);

    const onChangePhoto = (action) => {
        console.log('onCHangepjoto', action);
    }

    const close = () => {
        dispatch({
            type: 'photoCarousel',
            value: {
                isShow: false,
                photos: []
            }
        })
    }

    if(!isShow) {
        return null;
    } else {
        return (
            <div className={'photo_carousel'}>
                <div className={'photo_carousel-container'}>
                    <Button color={'icon'} className={'photo_carousel-container-close'}
                            onClick={() => close()}
                    >
                        <AiOutlineClose />
                    </Button>

                    <img src={'images/france/image1.jpg'} alt={'Img of cover'} />

                    <div className={'photo_carousel-controller'}>
                        <Button color={'icon'}
                                onClick={() => onChangePhoto('prev')}
                        >
                            <BsChevronLeft />
                        </Button>
                        <Button color={'icon'}
                                onClick={() => onChangePhoto('next')}
                        >
                            <BsChevronRight />
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

}