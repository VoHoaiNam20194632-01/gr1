import styles from './LoTrinh.module.scss'
import classNames from 'classnames/bind';
import Footer from '~/components/Footer/Footer';
import Button from '~/components/Button/Button';
const cx = classNames.bind(styles);
function LoTrinh() {
    return (
        <div>
            <div className={cx('title')}>
                <h3>Lộ trình học</h3>
                <p>
                    Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học.
                    Ví dụ: Để đi làm với vị trí "Lập trình viên Front-end" bạn nên tập trung vào lộ trình "Front-end".
                </p>
            </div>
            <div className={cx('wrapper')}>
                <div className={cx('front-end')}>
                    <div className={cx('wrapper-title-fe')}>
                        <h4  >Lộ trình học Front-end</h4>
                        <p>Lập trình viên Front-end là người xây dựng ra giao diện websites.
                            Trong phần này  sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.</p>
                    </div>
                    <img className={cx('imgfe')} src='https://files.fullstack.edu.vn/f8-prod/learning-paths/2/63b4642136f3e.png'></img>
                    <Button className={cx('bt')} outline to='/lotrinh/Frontend' >Xem Chi Tiet</Button>
                </div>
                <div className={cx('back-end')}>
                    <div className={cx('wrapper-title-be')}>
                        <h4  >Lộ trình học Back-end</h4>
                        <p>Trái với Front-end thì lập trình viên Back-end là người làm việc với dữ liệu, công việc thường nặng tính logic hơn.
                            Chúng ta sẽ cùng tìm hiểu thêm về lộ trình học Back-end nhé.</p>
                    </div>
                    <img className={cx('imgbe')} src='https://files.fullstack.edu.vn/f8-prod/learning-paths/2/63b4642136f3e.png'></img>
                    <Button className={cx('bt')} outline to='/lotrinh/backend' >Xem Chi Tiet</Button>
                </div>
            </div>
            <Footer />
        </div>


    );
}

export default LoTrinh;