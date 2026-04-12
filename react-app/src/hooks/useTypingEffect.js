import { useState, useEffect, useRef } from 'react';

export default function useTypingEffect(phrases = ["Data.", "Models.", "Intelligence.", "Systems."]) {
  const [text, setText] = useState('');
  const pi = useRef(0);
  const ci = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timer;

    function typeLoop() {
      const phrase = phrases[pi.current];
      if (!deleting.current) {
        setText(phrase.slice(0, ci.current + 1));
        ci.current++;
        if (ci.current === phrase.length) {
          deleting.current = true;
          timer = setTimeout(typeLoop, 2000);
          return;
        }
      } else {
        setText(phrase.slice(0, ci.current - 1));
        ci.current--;
        if (ci.current === 0) {
          deleting.current = false;
          pi.current = (pi.current + 1) % phrases.length;
        }
      }
      timer = setTimeout(typeLoop, deleting.current ? 45 : 95);
    }

    timer = setTimeout(typeLoop, 500);
    return () => clearTimeout(timer);
  }, [phrases]);

  return text;
}
