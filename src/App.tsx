import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/projects',
      element: <Projects />
    },
    {
      path: '/contact',
      element: <Contact />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}
