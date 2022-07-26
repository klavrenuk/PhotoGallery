import React from 'react';

import LoaderImg from './loader.gif';

import './loading.min.css';

export default function Loading(props) {
    const classNames = 'loading ' + props.type || '';

    return (
        <div className={classNames}>
            <img src={LoaderImg} alt={'Loading...'} />
        </div>
    )
}