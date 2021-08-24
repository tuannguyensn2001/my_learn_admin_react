import AppContext from 'src/context';
import { useContext } from 'react';

export default function useAppContext() {
  return useContext(AppContext);
}
