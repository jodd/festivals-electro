/* ==========================================================================
    Client app
   ========================================================================== */

import React from 'react'
import { render, hydrate } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'

import AppWrapper from './AppWrapper'

const renderMethod = module.hot ? render : hydrate

renderMethod(
  <AppContainer>
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  </AppContainer>,
  document.getElementById('root')
)

module.hot && module.hot.accept()
