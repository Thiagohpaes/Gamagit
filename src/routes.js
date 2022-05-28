import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Repositories from './page/Repositories'
import Home from './page/Home'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/repositories" element={<Repositories />} />
      </Routes>
    </BrowserRouter>
  )
}
