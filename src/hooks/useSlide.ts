import { useEffect, useState } from 'react';

export const useSlide = (...arg: string[]) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const countTime = setTimeout(() => setCount(count + 1), 3000);
    return () => clearTimeout(countTime);
  }, [count]);

  const currentImg = arg[count % arg.length];

  return {
    currentImg,
    count,
    setCount,
  };
};
