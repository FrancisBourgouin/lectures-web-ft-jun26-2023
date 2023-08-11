# Coffee User Profile Page

Show the profile page of members of a coffee website. Edit button will enable us to update the profile and change the text of a user. Stretch, we can create a new user.

## Data

### User

```jsx
const user = {
  id,
  name,
  username,
  bio,
};
```

### Users

```jsx
const users = {
  1: user,
  2: user,
};
```

## Mock Data

See planning/data/users.js

## Structure

### HTML

- header
  - h1
  - button toggle
- main
  - section profile
    - div img
    - h1 name
    - h2 username
    - p bio
    - button edit
  - form profileForm
    - div img
    - input name
    - input username
    - textarea bio
    - button save
  - form newProfileForm
    - div img
    - input name
    - input username
    - textarea bio
    - button save

### Components

- App
  - Header
  - Profile
  - ProfileForm
  - NewProfileForm (Stretch)

### Component Data

- App (State: userInfo{}, updateUserInfo())
  - Header (None)
  - Profile (Props: userInfo{})
  - ProfileForm (Props: userInfo{}, updateUserInfo())
  - NewProfileForm (Props: createUserInfo())
