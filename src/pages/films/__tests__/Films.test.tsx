import "@testing-library/jest-dom";
import { handlers, renderWithProviders } from "../../../utils/test-utils";
import Films from "../Films";
import { setupServer } from "msw/node";
import "whatwg-fetch";
import userEvent from "@testing-library/user-event";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("no films displayed when searching a film not in the list", async () => {
  const { findByText, getByRole, getByLabelText } = renderWithProviders(
    <Films />
  );

  expect(await findByText("Pulp Fiction")).toBeInTheDocument();

  const input = getByLabelText("Search films");
  await userEvent.type(input, "Fight Club");

  const list = getByRole("list").hasChildNodes();
  expect(list).toBeFalsy();
});

test("a films details are shown when clicked", async () => {
  const { findByText, getAllByRole, queryByText } = renderWithProviders(
    <Films />
  );

  expect(await findByText("Pulp Fiction")).toBeInTheDocument();

  const lastItem = getAllByRole("listitem").at(-1);

  if (lastItem) {
    await userEvent.click(lastItem);

    expect(queryByText("Directed by: Christopher Nolan")).toBeInTheDocument();
  }
});
