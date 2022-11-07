import { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import className from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faBars,
    faCircleXmark,
    faXmark,
    faUser,
    faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
const cx = className.bind(styles);

interface IHeaderProps {}

export const Header: FC<IHeaderProps> = (props) => {
    const navigate = useNavigate();
    const [input, setInput] = useState('');
    const [displaySideBar, setDisplaySideBar] = useState(false);

    const handleClearInput = () => {
        setInput('');
    };

    useEffect(() => {
        if (displaySideBar) {
        }
    }, [displaySideBar]);

    const handleSearch = () => {};

    const handleMenu = () => {};

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <header className={cx('wrapper')}>
            <a href="/home" className={cx('home-link')}>
                <img src={images.logo} className={cx('logo-img')}></img>
            </a>
            <div className={cx('right')}>
                <div className={cx('search')}>
                    <input
                        type="text"
                        placeholder="Search story"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />

                    <button
                        className={cx('clear-btn', {
                            'clear-btn-active': input.length > 0,
                        })}
                        onClick={handleClearInput}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <button
                    className={cx('menu-btn')}
                    onClick={() => setDisplaySideBar(!displaySideBar)}
                >
                    <FontAwesomeIcon icon={displaySideBar ? faXmark : faBars} />
                </button>
                <div
                    className={cx('side-bar', {
                        'side-bar-active': displaySideBar,
                    })}
                >
                    <div className={cx('menu')}>
                        <button className={cx(['option', 'login-btn'])}>
                            <FontAwesomeIcon icon={faUser} />
                            <span
                                className={cx('content')}
                                onClick={handleLogin}
                            >
                                Login
                            </span>
                        </button>
                        <button className={cx(['option', 'register-btn'])}>
                            <FontAwesomeIcon icon={faUserPlus} />
                            <span className={cx('content')}>Register</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
