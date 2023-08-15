import { Component } from "react";

export default class Spy extends Component {
  constructor() {
    super();
  }
  track = (event) => console.log("Client clicked at:", event.clientX, event.clientY);

  componentDidMount() {
    document.addEventListener("click", this.track);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.track);
  }

  render() {
    return <p>🕵️</p>;
  }
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
