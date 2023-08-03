import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAdjust,
    faAslInterpreting,
    faBell,
    faBook,
    faCircleXmark,
    faCog,
    faEarthAsia,
    faEllipsisVertical,
    faMagnifyingGlass,
    faSignOut,
    faSpinner,
    faToggleOff,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import SearchCourse from '~/components/SearchCourse';
import Menu from '~/components/Popper/Menu';
import { icon } from '@fortawesome/fontawesome-svg-core';
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
    const [searchResult, setSearchResult] = useState([])

    const currentUser = true
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1])
        }, 0
        )
    }, []);

    //Handle Logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem)
    }
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Trang Ca Nhan',
            to: '/@vohoainam',
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
                <div className={cx('logo')}>NAMIT</div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={attrs => (

                        < div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>
                                    KHOA HOC
                                </h4>
                                <SearchCourse />
                                <SearchCourse />
                                <SearchCourse />
                                <SearchCourse />

                            </PopperWrapper>

                        </div>

                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder='Search Course' spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>

                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <div className={cx('current-user')}>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faBell} />
                            </button>
                        </div>
                    ) : (
                        <div>
                            <Button primary>Sign in</Button>
                            <Button primary>Log in</Button>

                        </div>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img src='https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/325761738_1061160838608727_1608443232766094162_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JZpjHTI74u0AX_-lWZx&_nc_ht=scontent.fhan14-2.fna&oh=00_AfDEiXybPAaik00nMiKvb2m7sWIiLiRiMTEJ3qAnlllZVw&oe=64D11351'
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