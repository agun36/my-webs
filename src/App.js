import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepages from './Pages/Homepages'
import NavbarDesktop from './components/NavbarDesktop'
import HeadingConcept from './components/HeadingConcept'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/Styles/App.css'
import About from './components/About'
import ProjectOutlook from './components/ProjectOutlook'
import FooterBar from './components/FooterBar'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepages />} />
        <Route path='/navbar' element={<NavbarDesktop />} />
        <Route path='/about' element={<About />} />
        <Route path='/heading' element={<HeadingConcept />} />
        <Route path='/project' element={<ProjectOutlook />} />
        <Route path='/footer' element={<FooterBar />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
