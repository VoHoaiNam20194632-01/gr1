import styles from './Home.module.scss'
import classNames from 'classnames/bind';
import CourseItem from '../Course/CourseItem/CourseItem';
import Course from '../Course/Course';
import Footer from '~/components/Footer/Footer';
const cx = classNames.bind(styles)

function Home() {

    return (
        <div className={cx('wrapper')}>
            <div className={cx('slide-show')}>
            </div>
            <Course />
            <div className={cx('Video-noi-bat')}>
                <h4>
                    Video Nổi Bật
                </h4>
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
            </div>
            <Footer />
        </div>
    );
}

export default Home;