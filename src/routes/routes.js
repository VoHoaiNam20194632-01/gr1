import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Course from '~/pages/Course';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import LoTrinh from '~/pages/LoTrinh';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/course', component: Course },
    { path: '/lotrinh', component: LoTrinh },
    { path: '/profile', component: Profile , layout: HeaderOnly},
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
]
const privateRoutes = [

]
export { publicRoutes, privateRoutes }