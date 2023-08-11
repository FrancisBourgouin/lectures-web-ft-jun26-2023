import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import NewProfileForm from "./components/NewProfileForm";
import ProfileForm from "./components/ProfileForm";

import { usersObj } from "./data/users";
import { useProfile } from "./hooks/useProfile";

function App() {
  const { currentUser, mode, toggle, cycleUser, updateUser, createUser } =
    useProfile(usersObj);
  return (
    <>
      <Header cycleUser={cycleUser} />
      <main>
        <button onClick={toggle.create}>Add new profile</button>
        {mode === "VIEW" && <Profile {...currentUser} toggleEdit={toggle.edit} />}
        {mode === "EDIT" && <ProfileForm {...currentUser} onSubmit={updateUser} />}
        {mode === "CREATE" && <NewProfileForm onSubmit={createUser} />}
      </main>
    </>
  );
}

export default App;
