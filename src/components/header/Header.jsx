import React from 'react';

import Navigation from "./Navigation";

import './css/header.min.css';

export default function Header() {
    return (
        <header className={'header'}>
            <Navigation />
        </header>
    )
}