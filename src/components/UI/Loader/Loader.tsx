import { ThreeCircles } from 'react-loader-spinner';
import { lightTheme } from '../../../styles/theme';
import { LoaderWrapper } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderWrapper  data-testid="loader">
      <ThreeCircles
        color={lightTheme.colors.accent}
        innerCircleColor={lightTheme.colors.dark}
        ariaLabel="three-circles-rotating"
        height="150"
        width="150"
      />
    </LoaderWrapper>
  );
}