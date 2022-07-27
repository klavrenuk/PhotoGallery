import React from 'react';
import {Link} from "react-router-dom";

import navigation from "../../middleware/navigation";

import './css/navigation.min.css';

export default function Navigation() {
    const routers = navigation.pagesForView.slice().reverse();

    return (
        <nav className={'navigation'}>
            {
                routers.map((route) => {
                    return (
                        <Link key={route.path} to={route.path}>
                            { route.title }
                        </Link>
                    )
                })
            }
        </nav>
    )
}