import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import SearchCourse from '~/components/SearchCourse';
import styles from './Search.module.scss';

const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowReuslt] = useState(true);
    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();

    }

    const handleHideResult = () => {
        setShowReuslt(false)
    }
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 1, 1, 1])
        }, 0
        );
    }, []);

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={attrs => (

                < div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>
                            KHOA HOC
                        </h4>
                        <SearchCourse />
                        <SearchCourse />
                        <SearchCourse />
                        <SearchCourse />

                    </PopperWrapper>

                </div>

            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder='Search Course'
                    spellCheck={false}
                    onChange={e => setSearchValue(e.target.value)}
                    onFocus={() => setShowReuslt(true)}
                />
                {!!searchValue && (
                    <button className={cx('clear')} onClick={handleClear} >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>

            </div>
        </HeadlessTippy>
    );
}

export default Search;
