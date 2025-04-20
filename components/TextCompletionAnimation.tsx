import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface TextCompletionAnimationProps {
  text: string;
  speed?: number;             // seconds per character (default: 0.05)
  showCursor?: boolean;       // whether to display a blinking cursor
  onComplete?: () => void;    // callback when animation finishes
  className?: string;         // optional CSS class for the wrapper
  style?: React.CSSProperties; // optional inline styles (fontSize, fontFamily, etc.)
}

const charVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const TextCompletionAnimation: React.FC<TextCompletionAnimationProps> = React.memo(
  ({ text, speed = 0.05, showCursor = false, onComplete, className, style }) => {
    const [displayCount, setDisplayCount] = useState(0);
    const chars = useRef(Array.from(text));
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
      intervalRef.current = setInterval(() => {
        setDisplayCount(prev => {
          if (prev < chars.current.length) {
            return prev + 1;
          } else {
            clearInterval(intervalRef.current!);
            onComplete?.();
            return prev;
          }
        });
      }, speed * 1000);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }, [speed, onComplete]);

    return (
      <p
        className={className}
        style={{
          whiteSpace: 'pre-wrap',   // allow line breaks and wrapping
          wordBreak: 'break-word',  // long words will wrap
          margin: 0,                // reset default paragraph margin if needed
          ...style,
        }}
      >
        {chars.current.slice(0, displayCount).map((char, idx) => (
          <motion.span
            key={idx}
            variants={charVariants}
            initial="hidden"
            animate="visible"
          >
            {char}
          </motion.span>
        ))}
        {showCursor && (
          <motion.span
            style={{ marginLeft: '1px' }}
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 0.5 }}
          >
            |
          </motion.span>
        )}
      </p>
    );
  }
);

export default TextCompletionAnimation;
