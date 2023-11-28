import { useAnimatedTitle } from '../utils/useAnimatedTitle';
export const PageTitle = ({ title }) => {
  const displayTitle = useAnimatedTitle(title);
  return (
    <>
      {displayTitle.length < 1 && <h1 className='phantom-title'>asdf</h1>}
      {displayTitle.length > 0 && <h1>{displayTitle}</h1>}
    </>
  );
};
