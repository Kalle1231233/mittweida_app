import technikumImage from '../../public/assets/technikum.jpg';
import "../styles/TechnikumBanner.css";

export default function TechnikumBanner() {
    return (
        <div className="technikum-banner">
            <img
                src={technikumImage}
                alt="Technikum Mittweida"
                className="technikum-image"
            />
            <div className="technikum-text">
                <h2>Technikum Mittweida</h2>
                <p>Ein historisches Wahrzeichen der Hochschule und Mittelpunkt des Campus.</p>
            </div>
        </div>
    );
}
