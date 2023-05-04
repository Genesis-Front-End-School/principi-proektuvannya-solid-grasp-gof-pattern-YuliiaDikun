import { render, screen } from '@testing-library/react';
import Skill from './Skill';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

const mockSkills = {
  skills: [
    'Memorization techniques',
    'Balanced perfectionism ',
    'Learning techniques',
    'Education styles',
    'Finding motivation',
  ],
};

describe('Skill component', () => {
  it('renders skills list if skills are provided', () => {
    render(
      <ThemeProvider theme={theme}>
        <Skill skills={mockSkills.skills} />{' '}
      </ThemeProvider>,
    );

    expect(screen.getByText('Course skills:')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(5);
  });

  it('renders a message if no skills are provided', () => {
    render(
      <ThemeProvider theme={theme}>
        <Skill skills={null} />
      </ThemeProvider>,
    );

    expect(
      screen.getByText('Please help us to attract new skills!'),
    ).toBeInTheDocument();
  });
});
