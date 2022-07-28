import React from 'react';
import { AiOutlineStar } from "react-icons/ai";
import {Button} from "reactstrap";

import './css/list-empty.min.css';

export default function ListEmpty(props) {

    const createItem = () => props.RefModalAlbum.current.open(undefined, true);

    return (
        <div className={'list_empty'}>
            <div className={'list_empty-icon'}><AiOutlineStar /></div>
            <Button color={'link'}
                    className={'list_empty-create'}
                    onClick={() => createItem()}
            >create album</Button>
        </div>
    )
}