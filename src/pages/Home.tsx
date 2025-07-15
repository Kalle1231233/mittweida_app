import { Link } from 'react-router-dom';
import '../style/Home.css';
import mittweidaLogo from '../assets/mittweida-logo.png'; // Adjust the path as necessary
export default function Home() {
    return (
        <div className="home-page">
            <div className="home-header">
                <img src={mittweidaLogo} alt="Mittweida Logo" className="home-logo" />
                <h1>Discover Mittweida</h1>
                <p>Your smart guide to the best places, history, and culture of Mittweida.</p>
            </div>

            <div className="home-actions">
                <Link to="/map" className="home-card">
                    <span className="icon">🗺️</span>
                    <div>
                        <h2>Explore Map</h2>
                        <p>View highlights and explore places interactively.</p>
                    </div>
                </Link>

                <Link to="/places" className="home-card">
                    <span className="icon">📍</span>
                    <div>
                        <h2>Places List</h2>
                        <p>Browse through historical and popular locations.</p>
                    </div>
                </Link>

                <Link to="/scanner" className="home-card">
                    <span className="icon">📷</span>
                    <div>
                        <h2>Scan QR</h2>
                        <p>Scan a QR code nearby to get info about a location.</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
