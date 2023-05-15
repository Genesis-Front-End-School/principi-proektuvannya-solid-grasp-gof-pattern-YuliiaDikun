import React, { Suspense} from "react";
import { Outlet } from "react-router-dom";
import { ISharedLayout } from "../../../interfaces/SharedLayout";
import Loader from "../../UI/Loader/Loader";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { Header, Wrapper, ThemeButton } from './SharedLayout.styled';

const SharedLayout: React.FC<ISharedLayout> = ({toggleTheme, isDarkTheme }) => {
  return (
    <Wrapper>
      <Header>
        <Navigation />
        <ThemeButton onClick={toggleTheme}>
          {isDarkTheme ?
            <span aria-label="Light mode" role="img">🌞</span> :
            <span aria-label="Dark mode" role="img">🌜</span>}
        </ThemeButton>
      </Header>
      <main>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </Wrapper>
  );
};

export default SharedLayout;