import classNames from "classnames/bind";
import styles from "./SearchCourse.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "~/components/Image/Image";

const cx = classNames.bind(styles);
function SearchCourse() {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatarcourse')} src=" https://files.fullstack.edu.vn/f8-prod/courses/3.png" alt="khoahoc" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>
                        khoa hoc react
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </span>
                </h4>
            </div>
        </div>
    );
}

export default SearchCourse;