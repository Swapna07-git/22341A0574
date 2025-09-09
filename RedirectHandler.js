import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../services/apiService';

function RedirectHandler() {
  const { shortcode } = useParams();

  useEffect(() => {
    async function fetchOriginalURL() {
      const res = await apiService.getOriginalURL(shortcode);
      if (res.data.originalUrl) {
        window.location.href = res.data.originalUrl;
      } else {
        alert('Short URL not found');
      }
    }
    fetchOriginalURL();
  }, [shortcode]);

  return <p>Redirecting...</p>;
}

export default RedirectHandler;
