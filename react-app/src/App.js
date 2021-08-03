import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import AllCampaigns from './components/AllCampaigns';
import CampaignPage from './components/CampaignPage';
import CreateCampaignForm from './components/CreateCampaignForm';
import UpdateCampaignForm from './components/UpdateCampaignForm';




function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <NavBar />
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <NavBar />
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <NavBar />
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
        <NavBar />
          <AllCampaigns/>
        </ProtectedRoute>
        <ProtectedRoute path='/campaigns/createCampaign' exact={true} >
        <NavBar />
          <CreateCampaignForm/>
        </ProtectedRoute>
        <ProtectedRoute path='/campaigns/:campaignId' exact={true} >
        <NavBar />
          <CampaignPage/>
        </ProtectedRoute>
        <ProtectedRoute path='/campaigns/:id/updateCampaign/' exact={true} >
        <NavBar />
          <UpdateCampaignForm/>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
