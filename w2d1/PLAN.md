# Shopping Cart !

Takes in an array of items, and will list subtotal, total, tax, amount of items

Cart ?
Item ?

function

cartInformation?

Library
=> Playlists
=> playlist
=> Tracks
=> track

# Data structures (Start with the end of the line)

## Item (Object)

Array
Object Most voted

```jsx
const item = {
  name: "",
  price: 0,
  weight: 0,
  isExpired: false,
};
```

## Cart (Array)

```jsx
const cart = [item, item];
```

Array?
Object? Most voted!

## CartInformation (Object)

```jsx
const cartInformation = {
  subtotal: 0,
  total: 0,
  tax: 0,
  amountOfItems: 0,
  cart: cart,
};
```

Array
Object Most voted

## taxAmount (Number)

## calculateCart (Function)

```jsx
const calculateCart = (cart) => {};
```

## What if?

### Goes wrong

- What if cart was empty? => cart information works as expected, just with everything empty
- What if the cart wasn't a cart? => THROW AN ERROR (try / catch)
- What if the cart had invalid items? => Skip the invalid item
- What if the cart had a weight exceeding 9001 kg => Stop adding new items

### Goes right

- What if the cart received a proper cart array of objects => return cart information object with the info
