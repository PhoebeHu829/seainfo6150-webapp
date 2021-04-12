import React from "react";
import ArticleTextToggleButton from './ArticleTextToggleButton'

const testFunction = () => {
  console.log('hello');
}

it("renders correctly", () => {
  const { container } = render(<ArticleTextToggleButton buttonText={"show more"} onClick={testFunction} />);
  expect(container).toMatchSnapshot();
});
