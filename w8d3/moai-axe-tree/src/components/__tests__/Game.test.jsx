import Game from "../Game";
import { render, fireEvent, waitForElement } from "@testing-library/react";

describe("Game component", () => {
  it("should toggle the robot between cheating and not cheating when we click on it", () => {
    const { queryByText } = render(<Game />);

    const robot = queryByText("🤖");

    expect(robot).toHaveClass("cheating");

    fireEvent.click(robot);

    expect(robot).not.toHaveClass("cheating");
  });

  it("should show the computer win message when we click on a choice for the player", () => {
    const { getByText, queryByText, queryByTestId } = render(<Game />);

    const waitingMessage = getByText("Waiting for your choice!");

    expect(waitingMessage).toBeInTheDocument();

    const moaiIcon = queryByTestId("moai");

    fireEvent.click(moaiIcon);

    waitForElement(() => queryByText("Skynet has arisen!")).then(() => {
      const resultMessage = getByText("Skynet has arisen!");

      expect(resultMessage).toBeInTheDocument();
    });
  });
});

// Downside of findBy.. , async/await
