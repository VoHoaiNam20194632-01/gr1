import classNames from "classnames/bind";
import styles from './Sidebar.module.scss'
import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";
import config from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark, faBriefcase, faHomeAlt, faRoad, } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles)
function Sidebar() {
    return (

        <div className={cx('App_sidebar')}>
            <div className={cx('Sidebar_wrapper')}>
                <Menu>
                    <MenuItem title="Home" icon={<FontAwesomeIcon icon={faHomeAlt} />} to={config.routes.home}></MenuItem>
                    <MenuItem title="Lộ Trình" icon={<FontAwesomeIcon icon={faRoad} />} to={config.routes.lotrinh}></MenuItem>
                    <MenuItem title="Khoa Hoc" icon={<FontAwesomeIcon icon={faBookBookmark} />} to={config.routes.course}></MenuItem>
                    <MenuItem title="Tuyển Dụng" icon={<FontAwesomeIcon icon={faBriefcase} />} to={config.routes.tuyendung}></MenuItem>
                </Menu>
            </div>
        </div>
    );
}

export default Sidebar;