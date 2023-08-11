import useForm from "../hooks/useForm";

export default function NewProfileForm(props) {
  const initialValues = {
    name: "",
    username: "",
    bio: "",
  };

  const { formData, handleChange, handleSubmit } = useForm(initialValues, props.onSubmit);

  return (
    <form className="NewProfileForm" onSubmit={handleSubmit}>
      <div></div>
      <input
        name="name"
        placeholder="Enter the name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="username"
        placeholder="Enter the username"
        value={formData.username}
        onChange={handleChange}
      />
      <textarea
        name="bio"
        placeholder="Enter the bio"
        value={formData.bio}
        onChange={handleChange}
      ></textarea>
      <button>Create!</button>
    </form>
  );
}
