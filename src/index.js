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
      <Route path="create_client" element={<Test title="Create new client" isEdit={false} model='client'/>} />
      <Route path="edit_client" element={<Test title="Edit client" isEdit={true} model='client' />} />
      <Route path="create_address" element={<Test title="Create new address" isEdit={false} model='address'/>} />
      <Route path="edit_address" element={<Test title="Edit address" isEdit={true} model='address' />} />
      <Route path="create_telphone" element={<Test title="Create new telphone" isEdit={false} model='telphone'/>} />
      <Route path="edit_telphone" element={<Test title="Edit telphone" isEdit={true} model='telphone' />} />
    </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
