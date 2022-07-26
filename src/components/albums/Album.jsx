import React from 'react';
import Cover from "./Cover";


export default function Album(props) {
    if(!props) {
        return null;
    }

    if(props.isCover) {
        return <Cover data={props.data} />
    }

    return (
        <div className={'album'}>
            Album
        </div>
    )
}