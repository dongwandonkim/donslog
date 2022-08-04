import { useLayoutEffect, useState } from 'react';

function useElementSize(eleRef) {
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    function updateHeight() {
      setHeight(eleRef.current?.clientHeight);
    }

    window.addEventListener('resize', () => {
      setHeight(eleRef.current?.clientHeight);
      console.log('hook', height);
    });
    updateHeight();

    return () => window.removeEventListener('resize', updateHeight);
  }, []);
  return height;
}

export default useElementSize;
