import React, {useEffect, useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Button} from 'reactstrap';
import FixedPage from "../../middleware/fixed-page";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import './css/photo-carousel.min.css';


export default function PhotoCarousel() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const [isShow, setIsShow] = useState(false);
    const [activePhoto, setActivePhoto] = useState(null);

    const activePhotoIndex = useRef(0);
    const photos = useRef([]);


    useEffect(() => {
        if(state.photoCarousel) {
            document.addEventListener('keydown', handleKeyDown);

            setIsShow(state.photoCarousel.isShow);

            if(state.photoCarousel.isShow) {
                FixedPage.set(true);

                activePhotoIndex.current = 0;
                photos.current = state.photoCarousel.photos;
                setActivePhoto(photos.current[activePhotoIndex.current]);

            } else if(isShow) {
                FixedPage.remove(false);
            }
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        }

    }, [state]);

    const handleKeyDown = (event) => {
        switch (event.keyCode) {
            case 37:
                onMoveImg('left');
                break;

            case 39:
                onMoveImg('right');
                break;

            case 27:
                close();
                break;
        }
    }

    const onMoveImg = (side) => {
        if(photos.current.length < 2) {
            return;
        }

        if(side === 'right') {
            if(activePhotoIndex.current + 1 >= photos.current.length) {
                activePhotoIndex.current = 0;
            } else {
                activePhotoIndex.current = activePhotoIndex.current + 1;
            }

        } else {
            if(activePhotoIndex.current === 0) {
                activePhotoIndex.current = photos.current.length - 1;
            } else {
                activePhotoIndex.current = activePhotoIndex.current - 1;
            }
        }

        setActivePhoto(photos.current[activePhotoIndex.current])
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

                    <img src={'/uploads/' + activePhoto} alt={'Photo'} />

                    {
                        photos.current.length > 1 ?
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