export default function Header(props) {
  const { cycleUser } = props;
  return (
    <header className="Header">
      <h1>
        Little Chicken Coffee Company <span>🐔</span>
      </h1>
      <h2 onClick={cycleUser}>☕</h2>
    </header>
  );
}
