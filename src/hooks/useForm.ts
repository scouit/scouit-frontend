import { useState, ChangeEvent } from 'react';

export const useForm = <T>(initalState: T) => {
  const [text, setText] = useState(initalState);

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value, name } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };

  const addTextList = (name: keyof typeof text, value: string) => {
    if (!value) return;
    setText((prev) => ({
      ...prev,
      [name]: (prev[name] as unknown[]).concat(value),
    }));
  };

  const removeTextList = (name: keyof typeof text, removeIndex: number) => {
    setText((prev) => ({
      ...prev,
      [name]: (prev[name] as unknown[]).filter((_, idx) => removeIndex !== idx),
    }));
  };

  return {
    text,
    setText,
    handleOnChange,
    addTextList,
    removeTextList,
  };
};
