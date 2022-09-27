import "@testing-library/jest-dom";
import { renderWithProviders } from "../../../utils/test-utils";
import FilmsDetails from "../FilmsDetails";

test("no movie is selected on initialization", () => {
  const { getByText } = renderWithProviders(<FilmsDetails />);

  expect(getByText("No movie selected")).toBeInTheDocument();
});
