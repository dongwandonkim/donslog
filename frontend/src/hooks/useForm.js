import { useState } from 'react';

export const useForm = ({ initialValues = {} }) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { type, name } = e.target;

    const getValue = () => {
      if (type === 'checkbox') return e.target.checked;
      else if (type === 'select-multiple') {
        return Array.from(e.target.selectedOptions).map((o) => o.value);
      }
      return e.target.value;
    };
    const value = getValue();
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleEditorChange = (value, e) => {
    setValues((prevValues) => ({ ...prevValues, content: value }));
    console.log(values);
  };

  const handleSubmit = (onSubmit) => {
    return (e) => {
      console.log(values);
      if (e && typeof e.preventDefault === 'function') {
        e.preventDefault();
      }
      onSubmit(values);
    };
  };

  return {
    values,
    setValues,
    handleChange,
    handleEditorChange,
    handleSubmit,
  };
};
