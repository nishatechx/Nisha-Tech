import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  speed?: number;
  delay?: number;
  className?: string;
  loop?: boolean;
  pause?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ 
  words, 
  speed = 100, 
  delay = 0, 
  className = "",
  loop = true,
  pause = 2000
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;

    const currentWord = words[currentWordIndex];
    
    if (!isDeleting && displayedText.length < currentWord.length) {
      // Typing
      const timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting
      const timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length - 1));
      }, speed / 2);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && displayedText.length === currentWord.length) {
      // Pause at the end of word
      const timeout = setTimeout(() => {
        if (loop || currentWordIndex < words.length - 1) {
          setIsDeleting(true);
        }
      }, pause);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText.length === 0) {
      // Move to next word
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }
  }, [displayedText, words, currentWordIndex, speed, isStarted, isDeleting, loop, pause]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse border-r-2 border-accent ml-1"></span>
    </span>
  );
};

export default Typewriter;
