import React from 'react'
import Navbar from '../Navbar/Navbar'
import Section1 from '../Main/Section1/Section1'
import Section2 from '../Main/Section2/Section2'
import Section3 from '../Main/Section3/Section3'
import Section4 from '../Main/Section4/Section4'
import Section5 from '../Main/Section5/Section5'
import Section6 from '../Main/Section6/Section6'
import News from '../News/News'

const Layout = () => {
  return (
    <>
    <Navbar></Navbar>
    <Section1></Section1>
    <Section2></Section2>
    <Section3></Section3>
    <Section4></Section4>
    <Section5></Section5>
    <Section6></Section6>
    <News></News>
    </>
  )
}

export default Layout