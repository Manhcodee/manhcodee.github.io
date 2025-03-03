import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
