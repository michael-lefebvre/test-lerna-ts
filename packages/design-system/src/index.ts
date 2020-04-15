// import { DefaultTheme } from 'styled-components';

export interface DefaultTheme {
  name: string;
  borderRadius: string;

  colors: {
    main: string;
    secondary: string;
  };
}

const dayTheme: DefaultTheme = {
  name: 'day',
  borderRadius: '5px',

  colors: {
    main: 'cyan',
    secondary: 'magenta',
  },
};

const nightTheme: DefaultTheme = {
  name: 'night',
  borderRadius: '5px',

  colors: {
    main: 'pink',
    secondary: 'green',
  },
};

export { nightTheme, dayTheme };
