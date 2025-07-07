import { useEffect, useState } from "react";

interface TypingAnimationProps {
  quotes: string[];
  speed?: number;
  delay?: number;
  className?: string;
}

export function TypingAnimation({
  quotes,
  speed = 50,
  delay = 25000,
  className = "",
}: TypingAnimationProps) {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentQuote = quotes[currentQuoteIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (currentText.length < currentQuote.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentQuote.slice(0, currentText.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delay);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, speed / 2);
      } else {
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentQuoteIndex, isTyping, quotes, speed, delay]);

  return <span className={`${className} typing-cursor`}>{currentText}</span>;
}
