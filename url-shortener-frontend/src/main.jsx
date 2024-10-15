// main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header.jsx';
import { UrlInput } from './components/UrlInput.jsx';
import { ShortenedUrlPage } from './ShortenedUrlPage.jsx'; // Moveremos a "pages"
import './main.css';
import { RedirectToUrl } from './RedirectToUrl.jsx';

function MainRoutes() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<UrlInput />} />
                <Route path="/shortened-url/:url" element={<ShortenedUrlPage />} />
            </Routes>
        </>
    );
}
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<MainRoutes />} />
                <Route path="/redirect/:url" element={<RedirectToUrl />} />
            </Routes>
        </Router>
    );
}

createRoot(document.getElementById('root')).render(<App />);
