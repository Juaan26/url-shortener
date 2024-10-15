import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UrlInput.css';
import { StarField } from './StarField.jsx';

export function UrlInput() {
  const [inputUrl, setInputUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('URL enviada:', inputUrl); // Verifica si este mensaje aparece en la consola
    try {
      const response = await axios.post('http://localhost/url-shortener/urlshortener-api/shorten', 
        { url: inputUrl },
        { headers: { 'Content-Type': 'application/json' } }
      );
      const result = response.data;
      console.log('Respuesta del backend:', result); // Verifica la respuesta del backend
      if (result.shortened_url) {
        navigate(`/shortened-url/${result.shortened_url}`);
      }
    } catch (error) {
      console.error('Error al acortar la URL:', error);
    }
  };

  return (
    <div className='url-container'>
      <div className='url-subcontainer'>
        <StarField />
        <h2 className='url-subcontainer-h2'>PEGA LA URL QUE QUIERAS ACORTAR</h2>
        <form className='url-inputs' onSubmit={handleSubmit}>
          <input
            type="text"
            className='input-text'
            placeholder='Introduce el enlace'
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
          />
          <button type="submit" className='btn-submit'>
            <img className="url-svg" src="/rockets2.svg" alt="" />
          </button>
        </form>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
}
