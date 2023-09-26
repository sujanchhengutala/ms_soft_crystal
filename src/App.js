import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import {theme }from "./styles/styles"
import { ThemeProvider } from '@mui/material/styles';


function App() {
  return (
<ThemeProvider theme={theme}>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/services' element={<Services />} />
  <Route path='/contact' element={<Contact />} />
  <Route path='/about' element={<About />} />

</Routes>
</BrowserRouter>
</ThemeProvider>
  );
}

export default App;
