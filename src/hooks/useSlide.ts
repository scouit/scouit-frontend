import { useEffect, useRef, useState } from 'react';

export const useSlide = (...arg: string[]) => {
  const ref = useRef<HTMLImageElement | null>(null);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const countTime = setTimeout(() => {
      setCount(count + 1);
      restartAnime();
    }, 3000);
    return () => {
      clearTimeout(countTime);
    };
  }, [count]);

  const currentImg = arg[count % arg.length];

  const restartAnime = () => {
    const { current } = ref;
    const className = current.className.split(' ');
    current.classList.remove(...className);
    void current.offsetWidth;
    current.classList.add(...className);
  };

  return { ref, currentImg, count, setCount };
};
