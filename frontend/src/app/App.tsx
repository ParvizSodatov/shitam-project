import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { QueryProvider } from './providers';
import { router } from './router';
import './styles/index.css';

const theme = {
  token: {
    colorPrimary: '#059669',
    fontFamily: 'Inter, system-ui, sans-serif',
    borderRadius: 10,
  },
};

export const App = () => (
  <QueryProvider>
    <ConfigProvider theme={theme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </QueryProvider>
);
