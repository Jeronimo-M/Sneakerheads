// CSS
import './App.css';
// packages
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom'
// components
import Layout from './layouts/Layout';
import Login from './screens/Login';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const history = useHistory();

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/')
  }

  return (
    <div className="App">
      <Layout>
        <Switch>
        <Route path='/login'>
            <Login
              handleLogin={handleLogin}
            />
        </Route>
        </Switch>
      </Layout>
    </div>
  );
}
      

export default App;
