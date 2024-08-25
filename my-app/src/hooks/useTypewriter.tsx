import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, speed = 50) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index >= text.length) {
        clearInterval(typingInterval);
        return;
      }
      setDisplayText((prevText) => prevText + text.charAt(index));
      setIndex((prevIndex) => prevIndex + 1);
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed, index]);

  return displayText;
};
