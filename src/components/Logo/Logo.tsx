import React from 'react'
import { StyledLogo } from './Logo.styled'
const Logo:React.FC = () => {
  return (
    <StyledLogo to="/" data-testid="logo-link">
        <span>Learn</span>now
      </StyledLogo>
  )
}

export default Logo