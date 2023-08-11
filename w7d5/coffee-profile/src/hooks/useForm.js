import { useState } from "react";

export default function useForm(initialValues, onSubmit) {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { value, name } = event.target;

    const updatedFormData = { ...formData, [name]: value };

    setFormData(updatedFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(formData);
  };

  return { formData, handleChange, handleSubmit };
}
