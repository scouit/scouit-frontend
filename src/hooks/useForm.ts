import { useState, ChangeEvent } from 'react';

export const useForm = <T>(initalState: T) => {
  const [text, setText] = useState(initalState);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };

  return {
    text,
    handleOnChange,
  };
};
