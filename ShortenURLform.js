import React, { useState } from 'react';
import { logAPICall } from '../middleware/loggingMiddleware';
import apiService from '../services/apiService';

function ShortenURLForm() {
  const [url, setUrl] = useState('');
  const [validity, setValidity] = useState(30);
  const [customCode, setCustomCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { url, validity, shortcode: customCode };

    logAPICall('POST', '/shorten-url', payload);

    const response = await apiService.shortenURL(payload);
    alert(`Short URL: ${response.data.shortUrl}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="url" placeholder="Long URL" value={url} onChange={e => setUrl(e.target.value)} required />
      <input type="number" placeholder="Validity (minutes)" value={validity} onChange={e => setValidity(e.target.value)} />
      <input type="text" placeholder="Custom Shortcode (Optional)" value={customCode} onChange={e => setCustomCode(e.target.value)} />
      <button type="submit">Shorten URL</button>
    </form>
  );
}

export default ShortenURLForm;
