import styles from './CourseItem.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)
function CourseItem() {


    return (
        <div className={cx('course')} >
            <img className={cx('course-img')} src='https://files.fullstack.edu.vn/f8-prod/courses/7.png' >
            </img>

            <div className={cx('course-name')} >
                <a >
                    Kien thuc nhap mon
                </a>
            </div>
            <div className={cx('courseItem-students')}>
                <FontAwesomeIcon icon={faUsers} />
                <div className={cx('total-students')}>100</div>
            </div>
        </div>);
}

export default CourseItem;