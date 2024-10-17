import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UrlInput.css';
import { StarField } from './StarField.jsx';

export function UrlInput() {
  const [inputUrl, setInputUrl] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const isValidUrl = (url) => {
    const pattern = new RegExp('^(https?:\\/\\/)?'+
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+
      '((\\d{1,3}\\.){3}\\d{1,3}))'+
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
      '(\\?[;&a-z\\d%_.~+=-]*)?'+
      '(\\#[-a-z\\d_]*)?$','i');
    return !!pattern.test(url);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!isValidUrl(inputUrl)) {
      setError(' La URL no es valida o no está estructurada correctamente');
      return;
    }

    try {
      const response = await axios.post('http://localhost/url-shortener/urlshortener-api/shorten',
        { url: inputUrl },
        { headers: { 'Content-Type': 'application/json' } }
      );
      const result = response.data;
      console.log('Respuesta del backend:', result); // Verifica la respuesta del backend
      if (result.shortened_url) {
        const code = result.shortened_url;
        navigate(`/shortened-url/${code}`);
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
        {error && <p className='text-error'>{error}</p>}
        <p className='text'>La estructura del enlace debe ser: https://tuenlace.com/xx/xx</p>
      </div>
    </div>
  );
}
