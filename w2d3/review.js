// Asynchronous Content!

// Why Async in JS ?
// Nodejs or JS in browser
// JS interactivity => wait for something to happen

console.log("Hello!");

setTimeout(() => {
  console.log("How are you?");
}, 1000);

setTimeout(() => {
  console.log("How are yall?");
}, 1000);

console.log("Goodbye!");

// is setTimeout asychronous? => setTimeout is synchronous!
// The callback given to setTimeout is not (it is async)
