import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/theme.css';
import Layout from './components/Layout';
import MapView from './pages/MapView';
import PlacesList from './pages/PlacesList';
import QRScanner from './pages/QRScanner';
import PlaceDetail from './pages/PlaceDetail';
import Settings from './pages/Settings';
import Home from './pages/Home';

function App() {
    return (
        <Router basename="/mittweida_app/">
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/map" element={<MapView />} />
                    <Route path="/places" element={<PlacesList />} />
                    <Route path="/scanner" element={<QRScanner />} />
                    <Route path="/places/:id" element={<PlaceDetail />} />
                    <Route path="/settings" element={<Settings />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
