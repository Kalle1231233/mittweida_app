import { useNavigate, useParams } from 'react-router-dom';
import { usePlaces } from '../data/usePlaces';
import '../style/PlaceDetail.css';

export default function PlaceDetail() {
    const { id } = useParams<{ id: string }>();
    const { places, isLoading, isError } = usePlaces();
    const navigate = useNavigate();

    if (isLoading) return <p>Loading...</p>;
    if (isError || !places) return <p>Error loading place</p>;

    const place = places.find((p) => p.id.toString() === id);
    if (!place) return <p>Place not found</p>;

    return (
        <div className="place-detail">
            <button onClick={() => navigate('/map')} className="back-button">← Back</button>

            <img src={place.image} alt={place.name} className="place-image" />

            <h1>{place.name}</h1>
            {place.shortDescription && (
                <p className="short-description">{place.shortDescription}</p>
            )}

            {/* Rating */}
            {place.rating && (
                <div className="rating">
                    {'★'.repeat(Math.floor(place.rating))}
                    {place.rating % 1 !== 0 && '☆'}
                    <span className="rating-value">({place.rating.toFixed(1)})</span>
                </div>
            )}

            {/* Facts Grid */}
            <div className="facts-grid">
                {place.address && <div>📍 {place.address}</div>}
                {place.entry && <div>🎟️ {place.entry}</div>}
                {place.openingHours && <div>🕒 {place.openingHours}</div>}
                <div>
                    🗺️{' '}
                    <a
                        href={`https://www.google.com/maps/search/?api=1&query=${place.coordinates.lat},${place.coordinates.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View on map →
                    </a>
                </div>
                <div>{place.accessible ? '♿ Accessible' : '♿ Not accessible'}</div>
                <div>{place.familyFriendly ? '👶 Family-friendly' : '👶 Adults only'}</div>
                {place.highlight && <div>🎉 {place.highlight}</div>}
            </div>

            <hr className="divider" />


            {/* Long description */}
            <div className="description">
                {(place.descriptionParagraphs as unknown as string[])?.map((para: string, idx: number) => (
                    <p key={idx}>{para}</p>
                ))}
            </div>

        </div>
    );
}
