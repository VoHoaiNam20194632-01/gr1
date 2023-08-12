import styles from './Course.module.scss'
import classNames from 'classnames/bind';
import CourseItem from '../Course/CourseItem/CourseItem';
import Footer from '~/components/Footer/Footer';
const cx = classNames.bind(styles)

function Course() {

    return (
        <div className={cx('wrapper')}>
            <div className={cx('courses')}>
                <h4>Các Khóa Học</h4>
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
            </div>
        </div>
    );
}

export default Course;