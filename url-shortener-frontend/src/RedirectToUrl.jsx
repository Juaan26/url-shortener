import React from 'react';
import { useParams } from 'react-router-dom';

export function RedirectToUrl() {
  const { url } = useParams();
  const fullUrl = `http://localhost:5173/ShortenedUrlPage/${url}`;


  return (
    <div>
    </div>
  );
}
