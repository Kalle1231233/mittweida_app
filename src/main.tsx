import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'leaflet/dist/leaflet.css';
import App from './App.tsx';
import { SWRConfig } from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SWRConfig value={{ fetcher }}>
            <App />
        </SWRConfig>
    </StrictMode>
);
