import classNames from "classnames/bind";
import styles from './Sidebar.module.scss'
import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";
import config from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark, faHomeAlt, faRoad, } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles)
function Sidebar() {
    return (

        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Home" icon={<FontAwesomeIcon icon={faHomeAlt} />} to={config.routes.home}></MenuItem>
                <MenuItem title="Lộ Trình" icon={<FontAwesomeIcon icon={faRoad} />} to={config.routes.lotrinh}></MenuItem>
                <MenuItem title="Khoa Hoc" icon={<FontAwesomeIcon icon={faBookBookmark} />} to={config.routes.course}></MenuItem>
            </Menu>
        </aside>
    );
}

export default Sidebar;