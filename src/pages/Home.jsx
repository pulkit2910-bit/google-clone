import "./Home.css"
import { Link } from 'react-router-dom'

// Components
import Search from "../components/Search/Search";

// Material UI icons
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Home = () => {

    return (
        <div className='home'>
            <div className="home_header">
                <Link to="/gmail" className='link'>Gmail</Link>
                <Link to="/images" className='link'>Images</Link>
                <AppsIcon />
                <AccountCircleIcon style={{color: "gray"}}/>
            </div>

            <div className="home_body">
                <img 
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" 
                />
                <div className="home_search_bar">
                    <Search />  
                </div>
            </div>
        </div >
    )
}

export default Home;
