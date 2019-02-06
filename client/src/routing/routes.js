import App from '../containers/App'
import ComponentTest from '../containers/Component';
import Home from '../containers/Home';

const routes = [
    {
        component : App,
        routes    : [
            {
                path      : '/',
                exact     : true,
                component : Home,
            },
            {
                path      : '/component',
                component : ComponentTest,
            },
        ],
    },
];

export default routes;
