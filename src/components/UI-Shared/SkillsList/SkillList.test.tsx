import { render, screen } from '@testing-library/react';
import SkillsList from './SkillsList';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import { mockSkills } from '../../../__mocks__/mock_skills';


describe('SkillsList component', () => {
  it('renders a list of skills', () => {
    render(
      <ThemeProvider theme={theme}>
        <SkillsList skills={mockSkills} />
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
