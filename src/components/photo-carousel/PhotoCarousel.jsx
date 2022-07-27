import React from 'react';

import {Button} from 'reactstrap';

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import './css/photo-carousel.min.css';


export default function PhotoCarousel() {

    const onChangePhoto = (action) => {
        console.log('onCHangepjoto', action);
    }

    return (
        <div className={'photo_carousel'}>
            <div className={'photo_carousel-container'}>
                <Button color={'icon'} className={'photo_carousel-container-close'}>
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