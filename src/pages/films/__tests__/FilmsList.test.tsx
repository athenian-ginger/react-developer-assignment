import "@testing-library/jest-dom";
import { handlers, renderWithProviders } from "../../../utils/test-utils";
import FilmsList from "../FilmsList";
import { setupServer } from "msw/node";
import "whatwg-fetch";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test(`the skeleton is displayed on initialization
      when the request finishes the films list is displayed instead of the skeleton`, async () => {
  const { findByText, queryByTestId } = renderWithProviders(<FilmsList />);

  expect(queryByTestId("skeleton")).toBeInTheDocument();

  expect(await findByText("Inception")).toBeInTheDocument();
  expect(queryByTestId("skeleton")).not.toBeInTheDocument();
});
