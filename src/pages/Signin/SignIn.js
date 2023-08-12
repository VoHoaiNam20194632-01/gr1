import classNames from 'classnames/bind';
import styles from './SignIn.module.scss'
const cx = classNames.bind(styles);
function SignIn() {
    return (<div className={cx('wrapper')}>
        <div className={cx('container')}>
            <form >
                <input className={cx('username')} placeholder='Email ' />
                <input className={cx('username')} placeholder='Tên đăng nhập ' />
                <input type="password" className={cx('password')} placeholder='Mật Khẩu' />
                <input type="password" className={cx('password')} placeholder="Xác nhận mật khẩu"></input>
                <input className={cx('submit')} type="submit" value="Đăng ký" />

                <p>Bạn đã tài khoản? Hãy <a href='./login' className={cx('tosignin')}>Đăng nhập</a>  </p>
            </form>
        </div>
    </div>);
}

export default SignIn;