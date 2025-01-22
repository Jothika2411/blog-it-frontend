import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import PrivateRoute from './layouts/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyles } from './styles/global.styles';
import Dashboard from './components/dashboard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route
            path='/'
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
        <ToastContainer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
