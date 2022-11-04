import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { About } from './About'
import { Home } from './Home'
import { Signin } from './Signin'
import { Blogs } from './Blogs'
import { Signup } from "./Signup"

export const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={ <Signin />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<Signup />} />
        
    </Routes>
  )
}
