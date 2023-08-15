import { useEffect } from "react";

export default function Spy(props) {
  useEffect(() => {
    const track = (event) =>
      console.log("Client clicked at:", event.clientX, event.clientY);
    document.addEventListener("click", track);

    return () => document.removeEventListener("click", track);
  });

  return <p>🕵️</p>;
}

// useEffect(() => {
//   const track = (event) =>
//     console.log("Client clicked at:", event.clientX, event.clientY);
//   document.addEventListener("click", track);

//   return () => document.removeEventListener("click", this.track);
// },[]);

// useEffect(() => {
//   const track = (event) =>
//     console.log("Client clicked at:", event.clientX, event.clientY);
//   document.addEventListener("click", track);

//   return () => document.removeEventListener("click", this.track);
// },[]);
