import useAppContext from 'src/hooks/useAppContext.js';

export default function useSubheader() {
  const { dispatch } = useAppContext();

  return {
    set(subheader) {
      dispatch({
        type: 'SET_SUBHEADER',
        payload: subheader
      });
    }
  };
}
