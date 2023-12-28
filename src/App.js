import { Switch, Route,Redirect } from 'react-router-dom';
import React,{useContext} from 'react';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './components/Store/auth-context';
function App() {
  const authctx=useContext(AuthContext)
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {!authctx.isLoggedIn &&
        <Route path='/auth'>
          <AuthPage />
        </Route>}
        
        <Route path='/profile'>
          {authctx.isLoggedIn &&<UserProfile />}
          {!authctx.isLoggedIn &&  <Redirect to='/auth' /> }
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
