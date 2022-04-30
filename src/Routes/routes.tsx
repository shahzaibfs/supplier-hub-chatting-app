import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import PrivateRoutes from './private-routes'
import PublicRoutes from './public-routes'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
            <PublicRoutes />
            <PrivateRoutes />
    </BrowserRouter>
  )
}

export default Routes
