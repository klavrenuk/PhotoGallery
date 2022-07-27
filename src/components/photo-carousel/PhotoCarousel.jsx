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
    const [activePhoto, setActivePhoto] = useState(0);
    const [isInit, setIsInit] = useState(true);

    useEffect(() => {
        if(isInit) {
            initListeners();
            setIsInit(false);
        }

        if(state.photoCarousel) {
            setIsShow(state.photoCarousel.isShow);

            if(state.photoCarousel.isShow) {
                toggleRootClass(true);
                setPhotos(state.photoCarousel.photos);
                setActivePhoto(0);

            } else {
                toggleRootClass(false);
            }
        }

    }, [state]);

    const toggleRootClass = (isAdd) => {
        const root = document.querySelector('#root');

        if(root) {
            if(isAdd) {
                root.classList.add('root--h_fixed')
            } else {
                root.classList.remove('root--h_fixed')
            }
        }
    }

    const initListeners = () => {
        console.log('initListeners');
        document.removeEventListener("keydown", handleKeyDown);
    }

    const handleKeyDown = (event) => {
        console.log(event.keyCode);

        switch (event.keyCode) {

        }
    }

    const onMoveImg = (side) => {
        if(side === 'right') {
            if(activePhoto + 1 >= photos.length) {
                setActivePhoto(0);
            } else {
                setActivePhoto(activePhoto + 1);
            }
        } else {
            if(activePhoto === 0) {
                setActivePhoto(photos.length - 1);
            } else {
                setActivePhoto(activePhoto - 1);
            }
        }
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

                    <img src={photos[activePhoto]} alt={'Img of cover'} />

                    {
                        photos.length > 1 ?
                            <div className={'photo_carousel-controller'}>
                                <Button color={'icon'}
                                        onClick={() => onMoveImg('left')}
                                >
                                    <BsChevronLeft />
                                </Button>
                                <Button color={'icon'}
                                        onClick={() => onMoveImg('right')}
                                >
                                    <BsChevronRight />
                                </Button>
                            </div>
                            :
                            null
                    }
                </div>
            </div>
        )
    }

}