import Dashboard from "../views/Dashboard";
import Demo from "../components/demo/Demo";
import About from "../views/About";


const pages = [
    {
        path: '/demo',
        component: Demo
    }
];

const pagesForView = [
    {
        title: 'About',
        path: '/about',
        component: About
    },
    {
        title: 'Home',
        path: '/',
        component: Dashboard
    }
];

export default {
    pages: pages,
    pagesForView: pagesForView,
    routes: [...pages, ...pagesForView]
}