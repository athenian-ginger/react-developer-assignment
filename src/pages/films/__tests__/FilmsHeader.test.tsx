import "@testing-library/jest-dom";
import { renderWithProviders } from "../../../utils/test-utils";
import FilmsHeader from "../FilmsHeader";

test("the sort field is displayed", () => {
  const { getByLabelText } = renderWithProviders(<FilmsHeader />);

  expect(getByLabelText("Sort films")).toBeInTheDocument();
});

test("the search field displayed", () => {
  const { getByLabelText } = renderWithProviders(<FilmsHeader />);

  expect(getByLabelText("Search films")).toBeInTheDocument();
});
