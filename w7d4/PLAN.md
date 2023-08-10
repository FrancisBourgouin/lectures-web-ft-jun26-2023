# ERF: Electronics Repair Forum

Create a forum-like website where we see questions and their replies. We should see the information for the users, profile pictures and responses.

## Data

### User

```jsx
const user = [] || {};
```

```jsx
const user = {
  id: 1,
  profile_url: "/profile_pictures/1.png",
  username: "CircuitSavior",
  bio: "Electronics enthusiast, on a mission to resurrect circuits from the dead.",
};
```

### Question

```jsx
const question = [] || {};
```

```jsx
const question = {
  userId: 8,
  question:
    "I'm working on a laptop that isn't charging properly. It only charges when the charging cable is held at a certain angle. What could be causing this issue?",
  replies: [] || {},
};
```

### Reply

```jsx
const reply = [] || {};
```

```jsx
const reply = {
  userId: 8,
  question:
    "I'm working on a laptop that isn't charging properly. It only charges when the charging cable is held at a certain angle. What could be causing this issue?",
  replies: [reply, reply],
};
```

### Questions

```jsx
const questions = [] || {};
```

```jsx
const questions = {
  1: question,
  2: question,
};
```

### Users

```jsx
const users = [] || {};
```

```jsx
const users = {
  1: question,
  2: question,
};
```

## Seed Data

## Structure

### HTML

### Components

### Component Data

### Helper functions!
