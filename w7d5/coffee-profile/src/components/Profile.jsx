export default function Profile(props) {
  const { name, username, bio, profile_url, toggleEdit } = props;

  const profileStyle = { backgroundImage: `url(${profile_url})` };

  return (
    <section className="Profile">
      <div style={profileStyle}></div>
      <h1>{name}</h1>
      <h2>{username}</h2>
      <p>{bio}</p>
      <button onClick={toggleEdit}>Edit!</button>
    </section>
  );
}
