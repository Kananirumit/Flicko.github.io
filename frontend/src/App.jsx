import { Routes, Route } from "react-router-dom"; // ❌ Remove BrowserRouter here
import NavbarComponent from "./components/Navbar"; 
import './assets/css/bootstrap.min.css';
import './assets/css/main.css';
import './assets/css/splide.min.css';
import './assets/js/bootstrap.bundle.min.js';
import './assets/js/main.js';
import './assets/js/splide.min.js';

import Layout from './layout/Layout';
import Index from './pages/Index';

function App() {
  return (
    <>
      {/* <NavbarComponent /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} /> {/* ✅ Use index instead of path="/" */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
