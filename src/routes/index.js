import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Course from '~/pages/Course';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/course', component: Course },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
]
const privateRoutes = [

]
export { publicRoutes, privateRoutes }