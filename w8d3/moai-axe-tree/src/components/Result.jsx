export default function Result(props) {
  const { winner } = props;
  const messages = {
    playerWin: "Man over machine!",
    computerWin: "Skynet has arisen!",
    tie: "What kind of knot do you use normally?",
  };

  return (
    <footer>
      {!winner && <h2>Waiting for your choice!</h2>}
      {winner && <h2>{messages[winner]}</h2>}
    </footer>
  );
}
