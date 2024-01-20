"use client"
import React, { useEffect, useState } from 'react';

const WebsiteContent = () => {
  const [websiteContent, setWebsiteContent] = useState('');

  useEffect(() => {
    const fetchWebsiteContent = async () => {
      try {
        // Use a proxy server to fetch the content
        const response = await fetch('/api/proxy?url=https://www.google.com');
        const content = await response.text();
        setWebsiteContent(content);
      } catch (error) {
        console.error('Error fetching website content:', error);
      }
    };

    fetchWebsiteContent();
  }, []);

  return (
    <div>
      <h2>Website Content:</h2>
      <div dangerouslySetInnerHTML={{ __html: websiteContent }} />
    </div>
  );
};

export default WebsiteContent;
