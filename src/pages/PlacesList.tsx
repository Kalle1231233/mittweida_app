import { Link } from 'react-router-dom';
import { usePlaces, type Place } from '../data/usePlaces';
import '../style/PlacesList.css';

export default function PlacesList() {
    const { places, isLoading, isError } = usePlaces();

    if (isLoading) return <div className="loading">Loading places...</div>;
    if (isError || !places) return <div className="error">Error loading places</div>;

    return (
        <div className="places-list">
            <h1 className="page-title">List</h1>

            {places.map((place: Place) => (
                <div key={place.id} className="place-card">
                    <img src={place.image} alt={place.name} className="place-image" />

                    <div className="place-info">
                        <h2>{place.name}</h2>
                        <p className="short-description">{place.shortDescription}</p>

                        {place.rating && (
                            <div className="rating">
                                <span style={{ color: '#facc15' }}>
                                    {'★'.repeat(Math.floor(place.rating))}
                                    {place.rating % 1 !== 0 && '☆'}
                                </span>
                                <span className="rating-value" style={{ color: '#777', marginLeft: '0.3rem' }}>
                                    ({place.rating.toFixed(1)})
                                </span>
                            </div>
                        )}

                        <div className="details">
                            {place.address && <div>📍 {place.address}</div>}
                            {place.entry && <div>🎟️ {place.entry}</div>}
                            {place.openingHours && <div>🕒 {place.openingHours}</div>}
                            <div>
                                {place.accessible && <>♿ Accessible</>}
                                {' '}
                                {place.familyFriendly && <>👶 Family-friendly</>}
                            </div>
                        </div>

                        <Link to={`/places/${place.id}`} className="more-info-button">
                            More info →
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
