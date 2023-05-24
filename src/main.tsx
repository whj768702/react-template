import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import zhCN from 'antd/locale/zh_CN';
import { ConfigProvider } from 'antd';
import router from './router/index';
import {RouterProvider} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <RouterProvider router={router}></RouterProvider>
    </ConfigProvider>
  </React.StrictMode>,
)
