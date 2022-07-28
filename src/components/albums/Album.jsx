import React from 'react';
import {useDispatch} from 'react-redux';
import {Row, Col, Button} from "reactstrap";

import Cover from "./Cover";
import PhotoSmall from "./PhotoSmall";

import './css/album.min.css';


export default function Album(props) {
    const dispatch = useDispatch();

    const album = props.data;

    if (props.isCover) {
        return <Cover data={album}/>
    }

    const openPhoto = () => {
        dispatch({
            type: 'photoCarousel',
            value: {
                isShow: true,
                photos: album.photos
            }
        })
    }

    const onEdit = () => {
        if(props.refEdit) {
            props.refEdit.current.open(album);
        }
    }

    const onDelete = () => {
        if(props.refConfirm) {
            props.refConfirm.current.open(album);
        }
    }

    return (
        <div className={'album'}>
            <Row>
                <Col sm={10}>
                    <h4 className={'album-title'}>{album.name}</h4>
                </Col>
                <Col sm={2} className={'text-right'}>
                    <Button color={'icon'}
                            onClick={() => onEdit()}
                    >
                        <HiOutlinePencil />
                    </Button>
                    <Button color={'icon'}
                            onClick={() => onDelete()}
                    >
                        <HiOutlineTrash />
                    </Button>
                </Col>
            </Row>
            {
                !album.photos[0] ?
                    <h4 className={'album-no_photo'}>No Photo</h4>
                    :
                    <div className={'album-photos'}>
                        {
                            album.photos.map((photo, index) => {
                                return (
                                    <div className={'album-photos-photo'} key={index}>
                                        <PhotoSmall
                                            photo={photo}
                                            openPhoto={openPhoto}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
            }
        </div>
    )
}