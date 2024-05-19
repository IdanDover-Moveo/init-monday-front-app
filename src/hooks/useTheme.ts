import { useEffect } from 'react';
import { useMonday } from '../monday';
import { MondayThemes } from '../monday/types';

const useTheme = () => {
  const { mondayState } = useMonday();
  const theme = (mondayState.context?.theme ?? 'light') as MondayThemes;

  useEffect(
    function applyTheme() {
      document.body.classList.value = `${theme}-app-theme`;
    },
    [theme]
  );
};

export default useTheme;
