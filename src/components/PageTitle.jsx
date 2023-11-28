import { useAnimatedTitle } from '../utils/useAnimatedTitle';
export const PageTitle = ({ title }) => {
  const displayTitle = useAnimatedTitle(title);
  return <h1>{displayTitle}</h1>;
};
