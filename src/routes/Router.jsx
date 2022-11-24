import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../components/loginAndRegister/Login';
import Register from '../components/loginAndRegister/Register';
import { auth } from '../firebase/firebaseConfi';
import { actionLoginSync } from '../redux/actions/userAction';
import DashboardRouter from './DashboardRouter';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const [cheking, setCheking] = useState(true);

  const userStore = useSelector((store) => store.userStore);
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true);
        if (Object.entries(userStore).length === 0) {
          const {
            displayName,
            email,
            phoneNumber,
            accessToken,
            photoURL,
            uid,
          } = user.auth.currentUser;
          dispatch(
            actionLoginSync({
              name: displayName,
              email,
              accessToken,
              phoneNumber,
              avatar: photoURL,
              uid,
              error: false,
            })
          );
        }
      } else {
        setIsLoggedIn(false);
      }
      setCheking(false);
    });
  }, [setIsLoggedIn, dispatch, userStore]); 

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
       <Route path="/*" element={<DashboardRouter isAutentication={isLoggedIn}/>} />
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
