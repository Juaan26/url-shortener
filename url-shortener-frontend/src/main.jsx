import { createRoot } from 'react-dom/client';
import { UrlInput } from './components/UrlInput.jsx';
import { Header } from './components/Header.jsx';
import './main.css';

createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <UrlInput />
  </>
);
