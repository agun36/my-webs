import { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavbarDesktop = () => {
  const [navBackground, setNavBackground] = useState('transparent')

  const [linkColor, setLinkColor] = useState('light')

  const [menuVariant, setMenuVariant] = useState('light')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavBackground('#007bff')
        setMenuVariant('dark')
        setLinkColor('text-light')
      } else {
        setNavBackground('transparent')
        setLinkColor('text-dark')
        setMenuVariant('light')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navStyle = {
    backgroundColor: navBackground,
    transition: 'background-color 0.5s ease-out',
  }

  return (
    <Navbar
      style={navStyle}
      variant={menuVariant}
      className={`fixed-top${navBackground === '#222'}`}
      expand='lg'
      fixed='top'
    >
      <Container>
        <Navbar.Brand href='#home' active={false} className={linkColor}>
          <h3 className='text-info'>
            AKi<sub>n</sub>
            <sup className='text-dark'>Tech</sup>
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' className='border-0' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav className='justify-content-end'>
            <Nav.Link href='#home' active={false} className={linkColor}>
              Home
            </Nav.Link>
            <Nav.Link href='#about' active={false} className={linkColor}>
              About
            </Nav.Link>
            <Nav.Link href='#project ' active={false} className={linkColor}>
              Project Outlook
            </Nav.Link>
            <Nav.Link href='#contact' active={false} className={linkColor}>
              Contact us
            </Nav.Link>
            <Nav.Link href='#hire' active={false} className={linkColor}>
              Hire us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarDesktop
