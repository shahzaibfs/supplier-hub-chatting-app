import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { HomePage } from '../Pages/Home'

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
    </Routes>
  )
}

export default PublicRoutes

/*

"/"                 => Home-page 
"/useChat"          => Login-page {Little Info with Login Link to Supplierhub-orignal site }

*/
