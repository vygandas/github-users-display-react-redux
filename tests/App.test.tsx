import * as React from "react";
// import * as ReactDOM from "react-dom";
// import * as TestUtils from "react-dom/test-utils";
import App from "../src/components/App";
import "./__mocks__/setupTests";
import { shallow } from "enzyme";


describe("Main App component renders correctly", () => {

    // it("App is rendered", () => {
    //     // Render App in the document
    //     const appElement: App = TestUtils.renderIntoDocument(
    //         <App/>
    //     );
    //
    //     const appNode = ReactDOM.findDOMNode(appElement);
    //
    //     // Verify text content
    //     // expect(appNode.textContent).toEqual("Hello GitHub profile viewer!There will be a lis of GitHub users");
    // });

    it("should render without throwing an error", () => {
        expect(shallow(<App/>).find(".app-component").exists()).toBe(true);
    });

});
