import React from 'react';

import LoaderImg from './loader.gif';

import './loader.min.css';

export default function Loader(props) {
    const classNames = 'loader ' + props.type || '';

    return (
        <div className={classNames}>
            <img src={LoaderImg} alt={'Loading...'} />
        </div>
    )
}