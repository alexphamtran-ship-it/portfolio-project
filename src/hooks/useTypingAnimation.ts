import { useState, useEffect, useRef } from 'react';

interface TypingAnimationOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  paused?: boolean;
}

export const useTypingAnimation = ({
  words,
  typingSpeed = 150,
  deletingSpeed = 100,
  delayBetweenWords = 2000,
  paused = false,
}: TypingAnimationOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (words.length === 0 || paused) {
      // Clear any pending timeouts when paused
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      return;
    }
    
    const currentWord = words[wordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing phase
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
          timeoutRef.current = setTimeout(handleTyping, typingSpeed);
        } else {
          // Word is complete, wait before deleting
          timeoutRef.current = setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        // Deleting phase
        if (displayText.length > 0) {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
          timeoutRef.current = setTimeout(handleTyping, deletingSpeed);
        } else {
          // Deletion complete, move to next word
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    };

    timeoutRef.current = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayText, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, delayBetweenWords, paused]);

  return displayText;
};
