import React, {useEffect, useState} from 'react';
import {Row, Col} from "reactstrap";

import Loader from "../loader/Loader";
import Album from "./Album";

export default function Albums() {
    const [albums, setAlbums] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [colSize, setColSize] = useState(4);

    useEffect(() => {
        if(isLoading) {
            setAlbums([
                {
                    name: 'france',
                    photos: [
                        'public/images/france/image1.jpg',
                        'public/images/france/image2.jpg',
                        'public/images/france/image3.jpg'
                    ]
                },
                {
                    name: 'usa',
                    photos: [
                        'public/images/usa/image1.jpg',
                        'public/images/usa/image2.jpg',
                        'public/images/usa/image3.jpg'
                    ]
                }
            ])

            setIsLoading(false);
        }

    }, [isLoading])

    return (
        <div className={'albums'}>
            {
                isLoading ? <Loader /> :
                    <div>
                        <Row>
                            <Col sm={12}>
                                <ul>
                                    {
                                        albums.map((album, key) => {
                                            return (
                                                <li key={key}>
                                                    <Album data={album}/>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </Col>
                        </Row>
                    </div>

            }

        </div>
    )
}