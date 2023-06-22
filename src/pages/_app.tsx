import type { AppProps } from 'next/app';
import { useState } from 'react';
import { QueryClient, QueryClientConfig, QueryClientProvider } from 'react-query';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from '@/theme/theme';

const queryConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      keepPreviousData: false,
      retry: false,
      cacheTime: 0,
      staleTime: 0,
    },
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient(queryConfig));
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeScript initialColorMode={theme.config?.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}
