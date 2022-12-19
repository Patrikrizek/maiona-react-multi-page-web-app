import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';

function App() {
  return (
    <>
      <NavBar />

      <main className='container my-3'>
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/posts" element={<Posts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
