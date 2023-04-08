import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import App from './App';
import { store } from './store';
import theme from './theme';

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </Provider>
);
