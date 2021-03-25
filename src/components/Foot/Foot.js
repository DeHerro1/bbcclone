import React from 'react';
import './Foot.css';
import { Link } from 'react-router-dom';

const Foot = () => {
    return (
        <div className="foot">
            <h2>Explore the BBC</h2>
            <div className="bottom_links">
                <Link to="/news">
                    <div className="newss">News</div>
                </Link>
                <Link to="/sport">
                    <div className="sport">Sport</div>
                </Link>
                <Link to="/weather">
                    <div className="weather">Weather</div>
                </Link>
                <Link to="/reel">
                    <div className="reel">Reel</div>
                </Link>
                <Link to="/sounds">
                    <div className="sounds">Sounds</div>
                </Link>
                <Link to="/future">
                    <div className="future">Future</div>
                </Link>
                <Link to="/travel">
                    <div className="travel">Travel</div>
                </Link>
                <Link to="/iplayer">
                    <div className="newss">iplayer</div>
                </Link>
                <Link to="/sport">
                    <div className="sport">Sport</div>
                </Link>
                <Link to="/weather">
                    <div className="weather">Weather</div>
                </Link>
                <Link to="/reel">
                    <div className="reel">Reel</div>
                </Link>
                <Link to="/sounds">
                    <div className="sounds">Sounds</div>
                </Link>
                <Link to="/future">
                    <div className="future">Future</div>
                </Link>
                <Link to="/travel">
                    <div className="travel">Travel</div>
                </Link>
            </div>
            <div className="conditions">
                <div className="terms">
                <p>Terms of Use</p>
                <p>About the BBC</p>
                <p>Privacy Policy</p>
                <p>Cookies</p>
                <p>Accessibility Help</p>
                <p>Parental Guidance</p>
                <p>Contact the BBC</p>
                <p>Get Personalised Newsletters</p>
                <p>Advertise with us</p>
                <p>AdChoices / Do Not Sell My Info</p>
                </div>
                <p>Copyright © 2021 BBC. The BBC is not responsible for the content
                of external sites. Read about our approach to external linking.</p>
            </div>
           
        </div>
    )
}

export default Foot;
