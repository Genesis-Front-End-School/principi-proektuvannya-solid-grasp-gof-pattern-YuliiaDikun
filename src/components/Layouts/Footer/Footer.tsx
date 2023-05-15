import React from 'react'
import { SocialMedia } from '../../UI/SocialMedia/SocialMedia';
import Logo from '../../UI/Logo/Logo';
import { StyledFooter, StyledParagraph } from './Footer.styled';
const Footer:React.FC = () => {
  return (
    <StyledFooter>
      <Logo />
      <div>
        <StyledParagraph>Follow us in social media:</StyledParagraph>
        <SocialMedia />
      </div>
    </StyledFooter>
  )
}

export default Footer