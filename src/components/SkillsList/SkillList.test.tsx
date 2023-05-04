import { render, screen } from '@testing-library/react';
import SkillsList from './SkillsList';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

const mockSkillsData = {
  skills: [
    'Memorization techniques',
    'Balanced perfectionism ',
    'Learning techniques',
    'Education styles',
    'Finding motivation',
  ],
};

describe('SkillsList component', () => {
  it('renders a list of skills', () => {
    render(
      <ThemeProvider theme={theme}>
        <SkillsList skills={mockSkillsData.skills} />
      </ThemeProvider>,
    );

    const skillItems = screen.getAllByRole('listitem');
    expect(skillItems.length).toBe(5);

    const firstSkillItem = screen.getByText('1. Memorization techniques');
    expect(firstSkillItem).toBeInTheDocument();

    const lastSkillItem = screen.getByText('5. Finding motivation');
    expect(lastSkillItem).toBeInTheDocument();
  });
});
