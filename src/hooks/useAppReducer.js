import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_LOADING':
      return {
        ...state,
        isLoading: true
      };
    case 'HIDE_LOADING':
      return {
        ...state,
        isLoading: false
      };
    case 'SET_SUBHEADER':
      return {
        ...state,
        subheader: action.payload
      };
  }
};

const initReducer = {
  isLoading: false,
  subheader: {
    title: '',
    breadcrumbs: []
  }
};

export default function useAppReducer() {
  const [appState, dispatch] = useReducer(reducer, initReducer);

  return {
    appState,
    dispatch
  };
}
