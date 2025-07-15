import { Outlet } from 'react-router-dom';
import BottomNav from './bottomNav/BottomNav.tsx';

export default function Layout() {
    return (
        <div style={{ minHeight: '100vh', paddingBottom: '60px' }}>
            <Outlet />
            <BottomNav />
        </div>
    );
}
