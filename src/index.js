import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProSidebarProvider } from 'react-pro-sidebar';
// import Box from './Box';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <ProSidebarProvider>
        <App />
        </ProSidebarProvider>
);

