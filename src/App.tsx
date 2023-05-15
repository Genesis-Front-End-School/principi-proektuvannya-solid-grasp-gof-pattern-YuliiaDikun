import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyleComponent } from './styles/GlobalStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lazy, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from './components/Layouts/SharedLayout/SharedLayout';

const CoursesPage = lazy(() => import('./pages/Courses/Courses'));
const CoursePage = lazy(() => import('./pages/Course/Course'));

export function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme }>
      <Routes>       
        <Route path='/' element={<SharedLayout toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}>
          <Route index element={<CoursesPage />} />
          <Route path='/:id' element={<CoursePage />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Route>
      </Routes>

      <ToastContainer
        autoClose={2000}
        hideProgressBar={true}
        position='top-right'
      />
      <GlobalStyleComponent />
    </ThemeProvider>
  );
}
