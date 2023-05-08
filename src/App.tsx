import { ToastContainer } from 'react-toastify';
import { StyleProvider } from '@scouit/design-system';
import { Router } from './router';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => (
  <StyleProvider>
    <ToastContainer />
    <Router />
  </StyleProvider>
);
