import type { AppProps } from 'next/app';
import { useState } from 'react';
import { QueryClient, QueryClientConfig, QueryClientProvider } from 'react-query';
import { Box, ChakraProvider, ColorModeScript } from '@chakra-ui/react';
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
        <Box margin={{ lg: '1.5rem', '2xl': '0 auto' }}>
          <Component {...pageProps} />
        </Box>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
