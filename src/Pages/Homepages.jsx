import React from 'react'
import About from '../components/About'
import FooterBar from '../components/FooterBar'
import HeadingConcept from '../components/HeadingConcept'
import NavbarDesktop from '../components/NavbarDesktop'
import ProjectOutlook from '../components/ProjectOutlook'

const Homepages = () => {
  return (
    <>
      <NavbarDesktop />
      <About />
      <HeadingConcept />
      <ProjectOutlook />
      <FooterBar />
    </>
  )
}

export default Homepages
