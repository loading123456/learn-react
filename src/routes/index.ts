import Home from '~/pages/Home';
import { DefaultLayout } from '~/components/Layout';

const publicRoutes = [{ path: '/', component: Home, layout: DefaultLayout }];

const privateRoutes = [];

export { publicRoutes };
