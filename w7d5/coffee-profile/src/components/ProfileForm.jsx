import useForm from "../hooks/useForm";

export default function ProfileForm(props) {
  const { name, username, bio, profile_url } = props;
  const profileStyle = { backgroundImage: `url(${profile_url})` };

  const initialValues = {
    name,
    username,
    bio,
  };

  const { formData, handleChange, handleSubmit } = useForm(initialValues, props.onSubmit);

  return (
    <form className="ProfileForm" onSubmit={handleSubmit}>
      <div style={profileStyle}></div>
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
      <button>Update!</button>
    </form>
  );
}
