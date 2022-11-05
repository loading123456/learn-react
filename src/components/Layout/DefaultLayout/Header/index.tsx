import { FC, useState, useEffect } from 'react';
import className from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faBars,
    faCircleXmark,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
const cx = className.bind(styles);

interface IHeaderProps {}

export const Header: FC<IHeaderProps> = (props) => {
    const [input, setInput] = useState('');
    const [clearBtnShow, setClearBtnShow] = useState(false);
    useEffect(()=>{
        
    },[input])
    return (
        <header className={cx('wrapper')}>
            <a href="/" className={cx('home-link')}>
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
                    <FontAwesomeIcon
                        className={cx('loading')}
                        icon={faSpinner}
                    />
                    <button className={cx('clear-btn')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <button className={cx('menu-btn')}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </header>
    );
};

export default Header;
