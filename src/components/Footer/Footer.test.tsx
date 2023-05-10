import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('Footer component', () => {
  it('renders logo and social media icons', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <Footer />
        </ThemeProvider>
      </MemoryRouter>,
    );

    const logoElement = screen.getByTestId('logo-link');
    const socialMediaElement = screen.getByTestId('footer-social');

    expect(logoElement).toBeInTheDocument();

    expect(socialMediaElement).toBeInTheDocument();
  });
});
