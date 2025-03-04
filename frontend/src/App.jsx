import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './App.js';

import Authlayout from './layout/Authlayout';
import Login from './pages/Login';
import Layout from './layout/Layout';
import Index from './pages/Index';
import Buttons from './pages/Buttons';
import Cards from './pages/Cards';
import Utilitiescolor from './pages/Utilities-color';
import Utilitiesborder from './pages/Utilities-border';
import Utilitiesanimation from './pages/Utilities-animation';
import Utilitiesother from './pages/Utilities-other';
import Register from './pages/Register';
import Forgotpassword from './pages/Forgot-password';
import Error from './pages/Error';
import Blank from './pages/Blank';
import Charts from './pages/Charts';
import Tables from './pages/Tables';
function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Layout />} >
            <Route path="/" element={<Index />} />
            <Route path='/buttons' element={<Buttons />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/utilities-color" element={<Utilitiescolor />} />
            <Route path="/utilities-border" element={<Utilitiesborder />} />
            <Route path="/utilities-animation" element={<Utilitiesanimation />} />
            <Route path="/utilities-other" element={<Utilitiesother />} />
            <Route path="/error" element={<Error />} />
            <Route path="/blank" element={<Blank />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/tables" element={<Tables />} />

          </Route>

          <Route path="/" element={<Authlayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<Forgotpassword />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;