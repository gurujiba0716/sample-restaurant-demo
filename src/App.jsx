import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { Home } from './pages/Home.jsx';
import { Menu } from './pages/Menu.jsx';
import { About } from './pages/About.jsx';
import { Contact } from './pages/Contact.jsx';

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        window.setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  return null;
}

export function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(ScrollManager),
    React.createElement(Header),
    React.createElement(
      'main',
      { id: 'main-content' },
      React.createElement(
        Routes,
        null,
        React.createElement(Route, { path: '/', element: React.createElement(Home) }),
        React.createElement(Route, { path: '/menu', element: React.createElement(Menu) }),
        React.createElement(Route, { path: '/about', element: React.createElement(About) }),
        React.createElement(Route, { path: '/contact', element: React.createElement(Contact) }),
      ),
    ),
    React.createElement(Footer),
  );
}
