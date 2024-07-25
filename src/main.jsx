import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // This is your layout component with Header and Footer
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx'; // Assuming paths are corrected
import Signup from './pages/Signup.jsx';
import AddPost from './pages/Addpost.jsx';
import EditPost from './pages/EditPost.jsx';
import Post from './pages/Post.jsx';
import AllPosts from './pages/AllPosts.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Layout component with Header and Footer
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/all-posts", element: <AllPosts /> },
      { path: "/add-post", element: <AddPost /> },
      { path: "/edit-post/:slug", element: <EditPost /> },
      { path: "/post/:slug", element: <Post /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
