import './App.scss';
import { Navbar } from './Componantes/Navbar/Navbar';
import {Footer} from './Componantes/Footer/Footer'
import {Routes , Route} from 'react-router-dom'
import {Home} from './Componantes/Home/Home'
import {Portfolio} from './Componantes/Portfolio/Portfolio'
import {About} from './Componantes/About/About'
import {Contact} from './Componantes/Contact/Contact'

function App() {
  return (<>
    <Navbar />
      <Routes>
        <Route path='Start-React/' element = {<Home />} />
        <Route path='Start-React/portfolio' element = {<Portfolio />} />
        <Route path='Start-React/about' element = {<About />} />
        <Route path='Start-React/contact' element = {<Contact />} />
      </Routes>
    <Footer />
    </>);

    
}

export default App;
