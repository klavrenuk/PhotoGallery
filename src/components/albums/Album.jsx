import React from 'react';

export default function Album(props) {
    if(!props.data) {
        return null;
    }

    return (
        <div className={'album'}>
            Album
        </div>
    )
}