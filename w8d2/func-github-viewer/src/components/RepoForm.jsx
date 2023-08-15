import { useState } from "react";

export default function RepoForm(props) {
  const initialValues = { owner: "", repo: "" };

  const [formData, setFormData] = useState(initialValues);

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(formData);
    setFormData(initialValues);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="owner"
        placeholder="Enter the owner"
        onChange={handleChange}
        value={formData.owner}
      />
      <input
        type="text"
        name="repo"
        placeholder="Enter the repo"
        onChange={handleChange}
        value={formData.repo}
      />
      <button type="reset" onClick={props.resetCommits}>
        Reset
      </button>
      <button type="submit">Fetch</button>
    </form>
  );
}
