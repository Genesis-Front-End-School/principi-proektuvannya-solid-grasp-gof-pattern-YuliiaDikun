import { FC} from 'react'
import SocialMedia from '../SocialMedia/SocialMedia';
import Logo from '../Logo/Logo';
import { StyledFooter, StyledParagraph } from './Footer.styled';
const Footer:FC = () => {
  return (
    <StyledFooter>
      <Logo/>
      <div>
        <StyledParagraph>Follow us in social media:</StyledParagraph>
        <SocialMedia/>
      </div>
    </StyledFooter>
  )
}

export default Footer