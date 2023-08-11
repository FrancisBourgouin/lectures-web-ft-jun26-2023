import { useState } from "react";
import { updateUserInfo, createUserInfo } from "../helpers/userHelpers";
import useWow from "./useWow";

export function useProfile(initialUsers) {
  const [mode, setMode] = useState("VIEW");
  const [users, setUsers] = useState(initialUsers || {});
  const [currentUserId, setCurrentUserId] = useState(1);
  const { sayWow } = useWow();

  const currentUser = users[currentUserId];

  const toggle = {
    view: () => setMode("VIEW"),
    edit: () => setMode("EDIT"),
    create: () => setMode("CREATE"),
  };
  const cycleUser = () =>
    setCurrentUserId((currentUserId % Object.values(users).length) + 1);

  const updateUser = (formData) => {
    const updatedUsers = updateUserInfo(users, currentUserId, formData);
    setUsers(updatedUsers);
    toggle.view();
    sayWow();
  };

  const createUser = (formData) => {
    const updatedUsers = createUserInfo(users, formData);
    setUsers(updatedUsers);
    toggle.view();
    sayWow();
  };

  return { currentUser, mode, toggle, cycleUser, updateUser, createUser };
}
