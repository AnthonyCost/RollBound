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
import { grabMetaData } from './store/characters';
import AllCampaigns from './components/AllCampaigns';
import CampaignPage from './components/CampaignPage';
import CreateCampaignForm from './components/CreateCampaignForm';
import UpdateCampaignForm from './components/UpdateCampaignForm';
import MyCampaigns from './components/MyCampaignsPage';
import MyCharacters from './components/MyCharactersPage';
import CharacterProfilePage from './components/CharacterProfilePage';
import CreateCharacterForm from './components/CreateCharacterForm';
import UpdateCharacterForm from './components/UpdateCharacterForm';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';




function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      dispatch(grabMetaData());
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
          <Footer/>
        </Route>
        <Route path='/sign-up' exact={true}>
          <NavBar />
          <SignUpForm />
          <Footer/>
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <NavBar />
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <NavBar />
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/campaigns/myCampaigns/' exact={true} >
        <NavBar />
        <MyCampaigns />
        </ProtectedRoute>
        <ProtectedRoute path='/characters/myCharacters/' exact={true} >
        <NavBar />
          <MyCharacters/>
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
        <NavBar />
          <AllCampaigns/>
          <Footer/>
        </ProtectedRoute>
        <ProtectedRoute path='/campaigns/createCampaign' exact={true} >
        <NavBar />
          <CreateCampaignForm/>
        </ProtectedRoute>
        <ProtectedRoute path='/characters/createCharacter' exact={true} >
        <NavBar />
          <CreateCharacterForm/>
        </ProtectedRoute>
        <ProtectedRoute path='/campaigns/:campaignId' exact={true} >
        <NavBar />
          <CampaignPage/>
          <Footer/>
        </ProtectedRoute>
        <ProtectedRoute path='/characters/:id/' exact={true} >
        <NavBar />
          <CharacterProfilePage/>
          <Footer/>
        </ProtectedRoute>
        <ProtectedRoute path='/campaigns/:id/updateCampaign/' exact={true} >
        <NavBar />
          <UpdateCampaignForm/>
        </ProtectedRoute>
        <ProtectedRoute path='/characters/:id/updateCharacter/' exact={true} >
        <NavBar />
          <UpdateCharacterForm/>
        </ProtectedRoute>
        <ProtectedRoute path='/*' >
        <NavBar />
          <PageNotFound/>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
