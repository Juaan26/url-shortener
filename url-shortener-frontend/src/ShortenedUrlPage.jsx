import React from 'react';
import { useParams } from 'react-router-dom';

export function ShortenedUrlPage() {
  const { url } = useParams();
  const fullUrl = `http://localhost/redirect/${url}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullUrl).then(() => {
      alert('URL copiada al portapapeles');
    });
  };

  return (
    <div>
      <h2>URL Acortada</h2>
      <p>{fullUrl}</p>
      <button onClick={handleCopy}>Copiar URL</button>
    </div>
  );
}
