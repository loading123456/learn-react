import { FC } from 'react';
import styles from './Login.module.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

interface ILoginProps {}

export const Login: FC<ILoginProps> = (props) => {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('title')}>Login</span>

            <label className={cx('username-title')} htmlFor="username">
                Username:
            </label>
            <input
                type="text"
                placeholder="Enter your username"
                id="username"
            />
            <label className={cx('password-title')} htmlFor="password">
                Password:
            </label>
            <input
                type="password"
                placeholder="Enter your password"
                id="password"
            />
            <div className={cx('save-password')}>
                <label htmlFor="save-password-btn">
                    <input type="checkbox" id="save-password-btn" />
                    <span>&nbsp;&nbsp;Save your password</span>
                </label>
            </div>
            <button className={cx('login-btn')}>Login</button>
            <a>Forgot your password</a>
        </div>
    );
};
export default Login;
