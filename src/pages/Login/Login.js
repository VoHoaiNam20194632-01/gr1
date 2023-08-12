import classNames from 'classnames/bind';
import styles from './Login.module.scss';
const cx = classNames.bind(styles);

function Login() {
    return (<div className={cx('wrapper')}>
        <div className={cx('container')}>
            <form >
                <input className={cx('username')} placeholder='Email ' />
                <input className={cx('password')} placeholder='Mật Khẩu' />
                <input className={cx('submit')} type="submit" value="Đăng nhập" />
                <p>hoặc <a href='./laymatkhau' className={cx('tosignin')} >Quên mật khẩu</a></p>
                <p>Bạn không có tài khoản? Hãy <a href='./signin' className={cx('tosignin')}>Đăng ký</a>  </p>
            </form>
        </div>
    </div>);
}

export default Login;