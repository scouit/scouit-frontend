import { useEffect, useState } from 'react';

export const useHeaderScroll = () => {
  const [display, setDisplay] = useState<boolean>(true);
  let lastScroll = document.documentElement.scrollTop;
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const currentScroll = document.documentElement.scrollTop;
      if (currentScroll > lastScroll) {
        setDisplay(true);
        console.log('투르');
      } else {
        setDisplay(false);
        console.log('풜스');
      }
      lastScroll = currentScroll;
    });
  }, []);
  return display;
};
