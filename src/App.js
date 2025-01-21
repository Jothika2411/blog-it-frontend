import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AddPost from './components/blog/AddPost';
import BlogList from './components/blog/BlogList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/add-post' element={<AddPost />} />
        <Route path='/' element={<BlogList />} />
      </Routes>
    </Router>
  );
}

export default App;
