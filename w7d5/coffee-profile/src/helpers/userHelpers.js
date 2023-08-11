export const updateUserInfo = (users, id, formData) => {
  // formData should have name, username, bio

  const updatedUsers = { ...users };

  const updatedUser = { ...users[id], ...formData };

  updatedUsers[id] = updatedUser;

  return updatedUsers;
};

export const createUserInfo = (users, formData) => {
  // formData should have name, username, bio

  const id = Object.values(users).length + 1;
  const profile_url = `/profile_pictures/${Math.ceil(Math.random() * 6)}.png`;

  const updatedUsers = { ...users };

  const newUser = { id, profile_url, ...formData };

  updatedUsers[id] = newUser;

  return updatedUsers;
};
