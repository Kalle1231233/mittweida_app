import { NavLink } from 'react-router-dom';
import './BottomNav.css';

export default function BottomNav() {
    return (
        <nav className="bottom-nav">
            <NavLink to="/map" className="nav-item">🗺️ Map</NavLink>
            <NavLink to="/places" className="nav-item">📋 List</NavLink>
            <NavLink to={"/"} className="nav-item">🏠 Home</NavLink>
            <NavLink to="/scanner" className="nav-item">📷 Scanner</NavLink>
            <NavLink to="/settings" className="nav-item">⚙️ Settings </NavLink>



            {/* <NavLink to="/scanner" className="nav-item">📷 Scanner</NavLink> */}
        </nav>
    );
}
