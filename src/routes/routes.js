import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home/Home';
import Course from '~/pages/Course/Course';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import LoTrinh from '~/pages/LoTrinh/LoTrinh';
import Login from '~/pages/Login/Login';
import SignIn from '~/pages/Signin/SignIn';
import TuyenDung from '~/pages/TuyenDung/TuyenDung';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/course', component: Course },
    { path: '/lotrinh', component: LoTrinh },
    { path: '/tuyendung', component: TuyenDung },
    { path: '/profile', component: Profile, layout: HeaderOnly },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
    { path: '/login', component: Login, layout: HeaderOnly },
    { path: '/signin', component: SignIn, layout: HeaderOnly },


]
const privateRoutes = [

]
export { publicRoutes, privateRoutes }