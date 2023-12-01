import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LangingPage from '../Pages/LangingPage';
import SignupPage from '../Pages/SignupPage';
import LoginPage from '../Pages/LoginPage';
import ProtectedRoutes from './ProtectedRoutes';
import PrompterDashboard from '../Pages/PrompterDashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (!!localStorage.getItem('isLoggedIn')) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn])
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}>
          <Route path='/dashboard' element={<PrompterDashboard />} />
        </Route>

        <Route path='/' element={<LangingPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/login' element={<LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;