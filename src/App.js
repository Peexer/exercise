import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './assets/scss/pages/Home'
import Today from './assets/scss/pages/Today'
import Developer from './assets/scss/pages/Developer'
import Webd from './assets/scss/pages/Webd'
import Website from './assets/scss/pages/Website'
import Gsap from './assets/scss/pages/Gsap'
import Port from './assets/scss/pages/Port'
import Youtube from './assets/scss/pages/Youtube'
import Channel from './assets/scss/pages/Channel'
import Video from './assets/scss/pages/Video'
import Search from './assets/scss/pages/Search'
import Not from './assets/scss/pages/Not'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/today' element={<Today />} />
        <Route path='/developer' element={<Developer />} />
        <Route path='/webd' element={<Webd />} />
        <Route path='/website' element={<Website />} />
        <Route path='/gsap' element={<Gsap />} />
        <Route path='/port' element={<Port />} />
        <Route path='/youtube' element={<Youtube />} />
        <Route path='/channel/:channelId' element={<Channel />} />
        <Route path='/video/:videoId' element={<Video />} />
        <Route path='/search/:searchId' element={<Search />} />
        <Route path='*' element={<Not />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App