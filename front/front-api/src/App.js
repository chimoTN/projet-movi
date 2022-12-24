import React from 'react'
import HomeComponenent from './components/HomeComponent.js'
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponenent />} />
        </Routes>
      </BrowserRouter>
    </section>
  )

}

export default App