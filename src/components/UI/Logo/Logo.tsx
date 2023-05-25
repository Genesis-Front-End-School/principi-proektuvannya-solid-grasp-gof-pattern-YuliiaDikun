import React from 'react'

import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLogo = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  span {
    color: ${({ theme }) => theme.colors.accent};
    text-transform: uppercase;
  }
`;

const Logo:React.FC = () => {
  return (
    <StyledLogo to="/" data-testid="logo-link">
        <span>Learn</span>now
      </StyledLogo>
  )
}

export default Logo