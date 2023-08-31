// const messages = {
//   playerWin: "Man over machine!",
//   computerWin: "Skynet has arisen!",
//   tie: "What kind of knot do you use normally?",
// };
import { render } from "@testing-library/react";
import Result from "../Result";

describe("Result component", () => {
  it("should say waiting for your choice if nothing is done", () => {
    const { queryByText, getByText } = render(<Result />);

    const element = getByText("Waiting for your choice!");

    expect(element).toBeInTheDocument();
  });
  it("should show the proper message if we have a winning situation", () => {
    const messages = {
      playerWin: "Man over machine!",
      computerWin: "Skynet has arisen!",
      tie: "What kind of knot do you use normally?",
    };

    for (const key in messages) {
      const { queryByText, getByText } = render(<Result winner={key} />);

      const waitingMessage = queryByText("Waiting for your choice!");
      const message = getByText(messages[key]);

      expect(waitingMessage).not.toBeInTheDocument();
      expect(message).toBeInTheDocument();
    }
  });
});
