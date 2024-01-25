import './App.css';
import { Header, Container, Footer } from './Components/index'
import { Home, Profile, Details, Browse, } from './Pages/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
      <Header />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/details' element={<Details />} />
            <Route path='/browse' element={<Browse />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
