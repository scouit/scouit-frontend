import { RecoilRoot } from 'recoil';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { StyleProvider } from './styles';
import { Router } from './router';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      staleTime: 5000,
    },
  },
});

export const App = () => (
  <StyleProvider>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ToastContainer />
        <Router />
      </RecoilRoot>
    </QueryClientProvider>
  </StyleProvider>
);
