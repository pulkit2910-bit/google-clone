import "./Header.css"
import { Link } from "react-router-dom";

// components
import Search from '../../components/Search/Search'

// MUI ICONS
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import ImageIcon from '@mui/icons-material/Image';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const Header = () => {

    return (
        <div className="result-header">
            <div className="result-logo-div">
                <Link to="/">
                    <img
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" className="result-logo"
                    />
                </Link>
            </div>

            <div className="result-headerBody">
                <Search hideButtons />
                <div className="result-header-center">
                    <div className="center-options">
                        <Link to="/search">
                            <SearchIcon />
                            All
                        </Link>
                    </div>
                    <div className="center-options">
                        <Link to="/images">
                            <ImageIcon />
                            Images
                        </Link>
                    </div>
                    <div className="center-options">
                        <Link to="/videos">
                            <OndemandVideoIcon />
                            Videos
                        </Link>
                    </div>
                    <div className="center-options">
                        <Link to="/news">
                            <NewspaperIcon />
                            News
                        </Link>
                    </div>
                </div>
            </div>

            <div className="result-header-right">
                <div className="right-options">
                    <Link to="/settings">
                        <SettingsIcon />
                    </Link>
                </div>
                <div className="right-options">
                    <Link to="/apps">
                        <AppsIcon />
                    </Link>
                </div>
                <div className="right-options">
                    <Link to="/account">
                        <AccountCircleIcon />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;