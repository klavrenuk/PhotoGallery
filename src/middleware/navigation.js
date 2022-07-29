import Dashboard from "../views/Dashboard";
import Demo from "../components/demo/Demo";

const pages = [
    {
        path: '/demo',
        component: Demo
    }
];

const pagesForView = [
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