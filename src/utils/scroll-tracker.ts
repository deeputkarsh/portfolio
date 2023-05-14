import { createContext, useEffect, useState } from 'react';

export const ScrollContext = createContext('Top')
export const useScrollTrack = () => {
  const [scrollPos, setState] = useState('Top')
  const scrollListner = () => {
    const ele = document.scrollingElement as Element;
    const { scrollTop, clientHeight } = ele;
    const { top, bottom } = ele.getBoundingClientRect();
    let newScrollPos = 'Middle';
    if (Math.floor(top) >= scrollTop) { newScrollPos = 'Top'; }
    if (Math.floor(bottom) <= clientHeight) { newScrollPos = 'Bottom'; }
    // if (newScrollPos === scrollPos) return;
    requestAnimationFrame(() => { setState(newScrollPos); });
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollListner);
    return () => {
      window.removeEventListener('scroll', scrollListner);
    };
  }, []);
  return scrollPos
};
