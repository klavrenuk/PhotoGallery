import React, {useEffect, useState, useRef} from 'react';
import {Row, Col} from "reactstrap";
import axios from "axios";

import Loader from "../loader/Loader";
import Album from "./Album";
import ModalAlbum from "../modals/ModalAlbum";
import ModalConfirmDelete from "../modals/ModalConfirmDelete";
import ListEmpty from "./ListEmpty";

import './css/albums.min.css';

export default function Albums() {
    const [albums, setAlbums] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const RefModalConfirmDelete = useRef();
    const RefModalAlbum = useRef();

    useEffect(async () => {
        if(isLoading) {
            const arr = await getAlbums();

            setIsLoading(arr);
            setIsLoading(false);
        }

    }, [])

    const getAlbums = () => {
        return new Promise((resolve) => [
            axios({
                method: 'GET',
                url: 'http://localhost:9000/api/albums'
            }).then((response) => {
                resolve(response.data.albums);
                
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
                        {
                            !albums[0] ? <ListEmpty RefModalAlbum={RefModalAlbum} />  :
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
                                                                   refEdit={RefModalAlbum}
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
                    </div>

            }

            <ModalConfirmDelete ref={RefModalConfirmDelete} />
            <ModalAlbum ref={RefModalAlbum} />
        </div>
    )
}