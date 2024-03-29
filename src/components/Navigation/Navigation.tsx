import { FC} from "react";
import Logo from "../Logo/Logo";
import { HeaderWrapper, NavList, StyledLink } from "./Navigation.styled";
const Navigation:FC = () => {
  return (
    <HeaderWrapper>
      <Logo/>
      <nav>
        <NavList>
          <li>
            <StyledLink to='/'>Home</StyledLink>
          </li>          
        </NavList>
      </nav>
    </HeaderWrapper>
  );
};

export default Navigation;