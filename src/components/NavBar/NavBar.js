import React from 'react';
import './NavBar.css';
import Search from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import  ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-router-dom';

const NavBar = ({ show, handleDropDown }) => {


    return (
        <nav className="nav">
        <div className={ `${show ? "navbar_to" : "navbar"} navbar `}>
           <Link to="/">
                <div className="bbc_home_icon">
                    <div>B</div>
                    <div>B</div>
                    <div>C</div>
                </div>
           </Link> 
           
            <Link to="/signup">
                <div className="profile_link">
                    <AccountCircle className="bbc_account_icon"/>
                    <span className="bbc_account">BBC Account</span>
                </div>
            </Link>
            <Link to="/news">
                <div className={ ` news_link ${show ? 'change' : 'news_link'}`}>News</div>
            </Link>
            <Link to="/sport">
                <div className={ ` sport_link ${show ? 'change' : 'sport_link'}`}>Sport</div>
            </Link>
            <Link to="/weather">
                <div className={ ` weather_link ${show ? 'change' : 'weather_link'}`}>Weather</div>
            </Link>
            <Link to="/reel">
                <div className={ ` reel_link ${show ? 'change' : 'reel_link'}`}>Reel</div>
            </Link>
            <Link to="/sounds">
                <div className={ ` sounds_link ${show ? 'change' : 'sounds_link'}`}>Sounds</div>
            </Link>
            <Link to="/future">
                <div className={ ` future_link ${show ? 'change' : 'future_link'}`}>Future</div>
            </Link>
            <Link to="/travel">
                <div className={ ` travel_link ${show ? 'change' : 'travel_link'}`}>Travel</div>
            </Link>
            <div onClick={handleDropDown} className="dropdown">
                <span>More</span>
                <ArrowDropDown className="dropdown_icon" />
            </div>
            <form className="search_form" >
            <div className="search_section">
                <input
                type="text"
                className="search"
                placeholder="Search" />
                <Search className="search_button" />
            </div>
            </form>
        </div>
        {show && <div className="dropdown_items">
                <h2>MORE</h2>
                <p className="weather_item">Weather</p>
                <p className="reel_item">Reel</p>
                <p className="travel_item">Travel</p>
                <p>Worklife</p>
                <p>Culture</p>
                <p>Tv</p>
                <p className="sounds_item">Sounds</p>
                <p>Music</p>
                <p className="future_item">Future</p>
            </div> }
        </nav>
    )
}

export default NavBar;
