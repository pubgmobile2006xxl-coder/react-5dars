import React from 'react'
import Navbar from '../Navbar/Navbar'
import Section1 from '../Main/Section1/Section1'
import Section2 from '../Main/Section2/Section2'
import News from '../News/News'

const Layout = () => {
  return (
    <>
    <Navbar></Navbar>
    <Section1></Section1>
    <Section2></Section2>
    <News></News>
    </>
  )
}

export default Layout