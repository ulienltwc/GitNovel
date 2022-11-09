import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors:{ 
    brand: {
      100: "#FD91AB",
    },
  },
  fonts: {
  },
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>

  </React.StrictMode>
  
);

