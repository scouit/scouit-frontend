import { useEffect, useState } from 'react';

export const useHeaderScroll = () => {
  const [display, setDisplay] = useState<boolean>(true);
  useEffect(() => {
    let lastScroll = document.documentElement.scrollTop;
    document.addEventListener('scroll', () => {
      const currentScroll = document.documentElement.scrollTop;
      if (currentScroll > lastScroll) setDisplay(false);
      else setDisplay(true);

      lastScroll = currentScroll;
    });
  }, []);
  return display;
};
