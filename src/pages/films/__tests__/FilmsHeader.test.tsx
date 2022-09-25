import { render, screen } from "@testing-library/react";
import FilmsHeader from "../FilmsHeader";
import { Provider } from "react-redux";
import store from "../../../store/store";

test("checks if dropdown exists", () => {
  render(
    <Provider store={store}>
      <FilmsHeader />
    </Provider>
  );

  expect(screen.getByLabelText("Sort films")).toBeDefined();
});
