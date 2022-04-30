import React from 'react'
import { Route, Routes } from 'react-router-dom'

const PrivateRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/private" element={<h1>I am Private Route</h1>} />
    </Routes>
  )
}

export default PrivateRoutes
