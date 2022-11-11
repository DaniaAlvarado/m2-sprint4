import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../components/loginAndRegister/Login';
import Register from '../components/loginAndRegister/Register';
import { auth } from '../firebase/firebaseConfi';
import DashboardRouter from './DashboardRouter';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

const Router = () => {

  const [cheking, setCheking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true);

      } else {
        setIsLoggedIn(false);
      }
      setCheking(false);
    });
  }, [setIsLoggedIn, setCheking]);

  if (cheking) {
    return <h1>Espere....</h1>;
  }

  return (
    <BrowserRouter>
    <Routes>
    <Route element={<PublicRouter isAutentication={isLoggedIn} />}>
       <Route path="/Register" element={<Register />} />
       <Route path="/" element={<Login />} />
    </Route>
     <Route element={<PrivateRouter isAutentication={isLoggedIn} />}>
       <Route path="/*" element={<DashboardRouter />} />
     </Route>
    </Routes>
  </BrowserRouter>

  // <NavigationBar isAutentication={isLoggedIn} />
  // <Routes>
  //   <Route element={<PublicRouter isAutentication={isLoggedIn} />}>
  //     <Route path="/Register" element={<Register />} />
  //     <Route path="/" element={<Login />} />
  //   </Route>
  //   <Route element={<PrivateRouter isAutentication={isLoggedIn} />}>
  //     <Route path="/*" element={<DashboardRouter />} />
  //   </Route>
  // </Routes>

  )
}

export default Router
