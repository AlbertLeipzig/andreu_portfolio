import { useEffect, useState } from 'react';

export const useAnimatedTitle = (originalTitle) => {
  const [displayTitle, setDisplayTitle] = useState('');

  useEffect(() => {
    let index = 0;
    const time = 600 / originalTitle.length;

    const intervalId = setInterval(() => {
      const partialTitle = originalTitle.slice(0, index + 1);
      setDisplayTitle(partialTitle);

      index++;

      if (index === originalTitle.length) {
        clearInterval(intervalId);
      }
    }, time);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [originalTitle]);

  return displayTitle;
};
