import {
    faBell,
} from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Notification.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Notification() {
    return (
        <HeadlessTippy
            interactive
            delay={[0, 200]}
            offset={[16, 8]}
            placement="bottom-end"
            render={attrs => (

                < div className={cx('natification-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('natification-title')}>
                            Thong Bao
                        </h4>
                        <div className={cx('menu-natification-items')}>
                            <h5>Ban da hoan thanh khoa hoc react</h5>
                            <h5>Ban da hoan thanh khoa hoc react</h5>
                            <h5>Ban da hoan thanh khoa hoc react</h5>
                        </div>

                    </PopperWrapper>

                </div>

            )}
        >
            <div>
                <button className={cx('action-btn')}>
                    <FontAwesomeIcon icon={faBell} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Notification;