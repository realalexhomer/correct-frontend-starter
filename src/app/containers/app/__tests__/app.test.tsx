import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-dom/test-utils";

import { AppContainer } from "../";

class Wrapper extends React.Component {
  // need to wrap because SFCs in TestUtils will be null
  render() {
    return <AppContainer />;
  }
}

it("App is rendered", () => {
  const appElement: any = TestUtils.renderIntoDocument(<Wrapper />);

  const appNode = ReactDOM.findDOMNode(appElement) as any;

  // Verify text content
  expect(appNode.textContent).toEqual("HelloFoo to the barz");
});
