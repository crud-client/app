import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter, Routes,
  Route
} from 'react-router-dom'
import App from './App'
import Test from './Test'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './Theme'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="create" element={<Test title="Create new client" isEdit={false} />} />
      <Route path="edit" element={<Test title="Edit client" isEdit={true}/>} />
    </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
