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
  const modernHandleChange = ({
    value,
    name,
  }: {
    value: string;
    name: string;
  }) => {
    setText({ ...text, [name]: value });
  };

  const onTextListChange = (name: string, value: string[]) => {
    if (!value) return;
    setText((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    text,
    setText,
    handleOnChange,
    modernHandleChange,
    onTextListChange,
  };
};
