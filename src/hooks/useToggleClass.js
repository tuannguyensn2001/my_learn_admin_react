import { useState, useEffect } from 'react';

export default function useToggleClass(initClass, listener, addClass) {
  const [classToggle, setClassToggle] = useState(initClass);

  useEffect(() => {
    setClassToggle((prevState) => {
      if (listener) {
        const fakeClass = [prevState, ...addClass];
        return fakeClass.join(' ');
      }

      return initClass;
    });
  }, [listener]);

  return {
    classToggle
  };
}
