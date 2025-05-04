import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Button from '../Component/Button'
import Carousel from '../Component/Carausel'
import Input from '../Component/Input'
import Sidebar from '../Component/Sidebar'
import Loader from '../Component/Loader'

const CompoRoute = () => {

  return (
    <>
        <Routes>

            <Route path="/button" element={<Button/>} />
            <Route path="/caraousel" element={<Carousel/>}/>
            <Route path='/input' element={<Input/>}/>
            <Route path='/sidebar' element = {<Sidebar/>}/>
            <Route path='/loader' element={<Loader/>}/>
            
        </Routes>
    </>
  )
}

export default CompoRoute