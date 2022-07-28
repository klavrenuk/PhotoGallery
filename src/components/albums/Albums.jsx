import React, {useEffect, useState, useRef} from 'react';
import {Row, Col} from "reactstrap";

import Loader from "../loader/Loader";
import Album from "./Album";
import ModalEdit from "../modals/ModalEdit";
import ModalConfirmDelete from "../modals/ModalConfirmDelete";

import './css/albums.min.css';
import axios from "axios";

export default function Albums() {
    const [albums, setAlbums] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const RefModalConfirmDelete = useRef();
    const RefModalEdit = useRef();

    useEffect(async () => {
        if(isLoading) {
            const arr = await getAlbums();

            setIsLoading(false);
        }

    }, [isLoading])

    const getAlbums = () => {
        return new Promise((resolve) => [
            axios({
                method: 'GET',
                url: 'http://localhost:9000/api/albums'
            }).then((response) => {
                console.log(response);
            }).catch((err) => {
                console.error(err);
                resolve([]);
            })
        ])
    }

    return (
        <div className={'albums'}>
            {
                isLoading ? <Loader /> :
                    <div>
                        <Row>
                            <Col sm={12}>
                                <div className={'covers'}>
                                    {
                                        albums.map((album, key) => {
                                            return (
                                                <Album data={album} isCover={true} key={key} />
                                            )
                                        })
                                    }
                                </div>

                                <div className={'photos'}>
                                    {
                                        albums.map((album, key) => {
                                            return (
                                                <Album data={album}
                                                       isCover={false}
                                                       key={key}
                                                       refEdit={RefModalEdit}
                                                       refConfirm={RefModalConfirmDelete}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </Col>
                        </Row>
                    </div>

            }

            <ModalConfirmDelete ref={RefModalConfirmDelete} />
            <ModalEdit ref={RefModalEdit} />
        </div>
    )
}