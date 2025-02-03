import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/bootstrap.min.css';
import './assets/css/main.css';
import './assets/css/splide.min.css';
import './assets/js/bootstrap.bundle.min.js';
import './assets/js/main.js'
import  './assets/js/splide.min.js'



// import Authlayout from './layout/Authlayout';
import Layout from './layout/Layout';
import Index from './pages/Index';
// import About from './pages/About';
// import Pricing from './pages/Pricing';
// import Portfoliooverview from './pages/Portfolio-overview';
// import Portfolioitem from './pages/Portfolio-item';
// import Contact from './pages/Contact';
// import Faq from './pages/Faq';
// import Bloghome from './pages/Blog-home';
// import Blogpost from './pages/Blog-post';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Table from './pages/Table';
// import Edituser from './pages/Edit-user';
// import Adduser from './pages/Add-user';
// import Level1 from './context/Level1';
// import Level2 from './context/Level2';
// import Level3 from './context/Level3';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Index />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/blog-home" element={<Bloghome />} />
            <Route path="/blog-post" element={<Blogpost />} />
            <Route path="/portfolio-overview" element={<Portfoliooverview />} />
            <Route path="/portfolio-item" element={<Portfolioitem />} />
            <Route path="/table" element={<Table />} />
            <Route path="/table/:id" element={<Table />} />
            <Route path="/edit-user/:id" element={<Edituser />} />
            <Route path="/add-user" element={<Adduser />} /> */}
          </Route>
          {/* <Route path="/" element={<Authlayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;



