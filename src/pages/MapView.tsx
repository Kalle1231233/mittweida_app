import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { usePlaces } from '../data/usePlaces';
import { type LatLngExpression, Icon } from 'leaflet';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import '../style/MapView.css';

const customIcon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

export default function MapView() {
    const { places, isLoading, isError } = usePlaces();
    const mittweidaCenter: LatLngExpression = [50.986, 12.975];

    if (isLoading) return <p>Loading map...</p>;
    if (isError || !places) return <p>Error loading places.</p>;

    return (
        <div style={{ height: 'calc(100vh - 60px)', width: '100%' }}>
            <MapContainer center={mittweidaCenter} zoom={15} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    attribution="&copy; OpenStreetMap"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {places.map((place) => (
                    <Marker
                        key={place.id}
                        position={[place.coordinates.lat, place.coordinates.lng]}
                        icon={customIcon}
                    >
                        <Popup>
                            <div style={{ maxWidth: '90vw', fontSize: '0.9rem', lineHeight: '1.3', padding: '0.75rem' }}>
                                <h3 style={{ fontSize: '1.2rem', margin: '0 0 0.5rem' }}>{place.name}</h3>
                                <img src={place.image} alt={place.name} style={{
                                    width: '100%', height: 'auto', maxHeight: '150px',
                                    objectFit: 'cover', borderRadius: '8px', marginBottom: '0.5rem'
                                }} />

                                {place.shortDescription && (
                                    <p style={{ marginBottom: '0.5rem' }}>{place.shortDescription}</p>
                                )}

                                {place.rating && (
                                    <div style={{ marginBottom: '0.5rem', color: '#facc15' }}>
                                        {'★'.repeat(Math.floor(place.rating))}
                                        {place.rating % 1 !== 0 && '☆'}
                                        <span style={{ color: '#ccc', marginLeft: '0.3rem', fontSize: '0.8rem' }}>
          ({place.rating.toFixed(1)})
        </span>
                                    </div>
                                )}

                                {/* Adresse */}
                                {place.address && (
                                    <div style={{ marginBottom: '0.3rem', fontSize: '0.85rem' }}>
                                        📍 {place.address}
                                    </div>
                                )}

                                {/* Eintritt */}
                                {place.entry && (
                                    <div style={{ marginBottom: '0.3rem', fontSize: '0.85rem' }}>
                                        🎟️ {place.entry}
                                    </div>
                                )}

                                {/* Öffnungszeiten */}
                                {place.openingHours && (
                                    <div style={{ marginBottom: '0.3rem', fontSize: '0.85rem' }}>
                                        🕒 {place.openingHours}
                                    </div>
                                )}

                                {/* Barrierefreiheit */}
                                <div style={{ marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                                    ♿ Accessible • 👶 Family-friendly
                                </div>

                                {/* Event-Tipp */}
                                {place.event && (
                                    <div style={{ marginBottom: '0.5rem', fontSize: '0.85rem', color: '#406cff' }}>
                                         {place.event}
                                    </div>
                                )}

                                <div style={{ textAlign: 'center' }}>
                                    <Link to={`/places/${place.id}`}>
                                        <button style={{
                                            backgroundColor: '#406cff', color: '#fff',
                                            padding: '0.4rem 0.8rem', borderRadius: '8px',
                                            fontSize: '0.85rem', fontWeight: '500', border: 'none', cursor: 'pointer'
                                        }}>
                                            More info →
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </Popup>

                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
