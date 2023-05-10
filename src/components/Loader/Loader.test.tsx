import { screen, render } from "@testing-library/react";
import Loader from "./Loader";
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe("Loader", () => {
  test("renders the loader", () => {
   render(
      <ThemeProvider theme={theme}>
        <Loader />
      </ThemeProvider>,
    );
    const loaderElement = screen.getByTestId("loader");
    expect(loaderElement).toBeInTheDocument();
  });
});