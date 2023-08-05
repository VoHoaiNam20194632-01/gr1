
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '~/components/Image/Image';
import {
    faBook,
    faCog,
    faEarthAsia,
    faEllipsisVertical,
    faGraduationCap,
    faSignOut,
    faToggleOff,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button/Button';
import styles from './Header.module.scss';
import Search from '../Search/Search';
import Menu from '~/components/Popper/Menu/Menu';
import Notification from '../Notification/Notification';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tieng Viet'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faToggleOff} />,
        title: 'Che Do',

    },

];
function Header() {


    //   nếu có user thi cho bằng true để vào home còn không thì ở trang login
    const currentUser = true

    //Handle Logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem)
    }
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Trang Ca Nhan',
            to: './profile',
        },
        {
            icon: <FontAwesomeIcon icon={faBook} />,
            title: 'Khoa hoc cua toi',
            to: '/khoahoccuatoi',
        },
        {
            icon: <FontAwesomeIcon icon={faCog} />,
            title: 'Cai dat',
            to: '/caidat',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Dang xuat',
            to: '/dangxuat',
            separate: true,
        },
    ]
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <FontAwesomeIcon icon={faGraduationCap} />
                    <div className={cx('name-logo')}>NAMIT</div></div>
                {/* search */}
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <div className={cx('current-user')}>
                            <Notification />
                        </div>
                    ) : (
                        <div>
                            <Button outline to='/signin'>Sign in</Button>
                            <Button outline to="/login">Log in</Button>

                        </div>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image src='https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/325761738_1061160838608727_1608443232766094162_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JZpjHTI74u0AX_-lWZx&_nc_ht=scontent.fhan14-2.fna&oh=00_AfDEiXybPAaik00nMiKvb2m7sWIiLiRiMTEJ3qAnlllZVw&oe=64D11351'
                                className={cx('user-avatar')}
                                alt='vo hoai nam' />
                        ) : (

                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>

                        )}

                    </Menu>
                </div>
            </div >
        </header >

    );
}

export default Header;