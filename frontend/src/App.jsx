import React from 'react'
import { Routes , Route } from 'react-router';
import CaptainSignup from './pages/CaptainSignup';
import Start from './pages/Start';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/CaptainLogin';
import Home from './pages/Home';
import UserProtectWrapper from './pages/UserProtectWrapper';
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';
import Riding from './pages/Riding';
import CaptainProtectWrapper from './pages/CaptainProtectWrapper';
import CaptainRiding from './pages/CaptainRiding';

const App = () => {
  return (
    <div>
       <Routes>
          <Route path='/' element= {<Start />} />
          <Route path='/login' element= {<UserLogin />} />
          <Route path='/riding' element= {<Riding />} />
          <Route path='/captain-riding' element= {<CaptainRiding />} />
          <Route path='/signup' element= {<UserSignup />} />
          <Route path='/captain-login' element= {<CaptainLogin />} />
          <Route path='/captain-signup' element= {<CaptainSignup />} />
          <Route path='/home' element= {
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          } />
           <Route path='/user/logout' element= {
            <UserProtectWrapper>
              <UserLogout />
            </UserProtectWrapper>
          } />
          <Route path='/captain-home' element= {
            // <CaptainHome />
             <CaptainProtectWrapper>
              <CaptainHome />
             </CaptainProtectWrapper>
          } />
          
       </Routes>
    </div>
  )
}

export default App