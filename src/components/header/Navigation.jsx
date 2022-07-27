import React from 'react';
import {Link} from "react-router-dom";

import navigation from "../../middleware/navigation";

export default function Navigation() {
    return (
        <nav className={'navigation'}>
            {
                navigation.pagesForView.reverse().map((route) => {
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