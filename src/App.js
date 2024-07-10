// frontend/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import HandRaise from './components/HandRaise';
import Reactions from './components/Reactions';
import Login from './components/Login';
import Register from './components/Register';


const App = () => {
  const [authToken, setAuthToken] = useState(null);

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        authToken ? <Component {...props} /> : <Navigate  to="/login" replace />
      }
    />
  );

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login">
            <Login setAuthToken={setAuthToken} />
          </Route>
          <Route path="/register" component={Register} />
          <PrivateRoute
            path="/"
            component={() => (
              <>
                <AdminPanel />
                <HandRaise />
                <Reactions />
              </>
            )}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
