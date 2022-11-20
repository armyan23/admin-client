import { FC } from "react";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import { SnackbarProvider } from "notistack";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

// @ts-ignore
import lightThemeOptions from "/styles/them/lightThemeOptions.ts";
import { wrapper } from "store/store";
import createEmotionCache from "util/createEmotionCache";

import "@fontsource/roboto/400.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "styles/globals.css";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
const lightTheme = createTheme(lightThemeOptions);

const App: FC<MyAppProps> = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const clientSideEmotionCache = createEmotionCache();
  const { emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = (Component as any).getLayout || ((page: any) => page);

  return (
    <Provider store={store}>
      {getLayout(
        <SnackbarProvider>
          <CacheProvider value={emotionCache}></CacheProvider>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </SnackbarProvider>
      )}
    </Provider>
  );
};

export default App;
