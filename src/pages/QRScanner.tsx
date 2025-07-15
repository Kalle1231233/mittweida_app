import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QrScanner } from 'react-qrcode-scanner';
import '../style/QRScanner.css';

export default function QRScanner() {
    const [qrData, setQrData] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (qrData && /^\d+$/.test(qrData)) {
            navigate(`/places/${qrData}`);
        }
    }, [qrData, navigate]);

    return (
        <div className="qr-scanner-page">
            <h1 className="qr-scanner-title">Scan QR Code</h1>
            <p className="qr-scanner-description">
                Scan the QR code in front of you to get more information about the location.
            </p>

            <div className="qr-scanner-box">
                <QrScanner
                    onScan={(data: string | null) => data && setQrData(data)}
                    onError={(err: unknown) => console.error(err)}
                    facingMode="environment"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        backgroundColor: '#000',
                        borderRadius: '16px'
                    }}
                />
                <div className="qr-scanner-overlay"></div>
            </div>

            {qrData && (
                <div className="qr-detected">
                    <strong>Detected:</strong> {qrData}
                </div>
            )}
        </div>
    );
}
