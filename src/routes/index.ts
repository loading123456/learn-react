import Home from '~/pages/Home';
import Login from '~/pages/auth/Login';
import Todos from '~/pages/Todos';
import { Tailwind } from '~/pages/Tailwind';
import { DefaultLayout } from '~/components/Layout';
const publicRoutes = [
    { path: '/home', component: Home, layout: DefaultLayout },
    { path: 'login', component: Login, layout: null },
    { path: 'todos', component: Todos, layout: null },
    { path: 'tailwind', component: Tailwind, layout: null },
];

const privateRoutes = [];

export { publicRoutes };
