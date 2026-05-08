import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { business, navItems } from '../data/siteData.js';
import { Button } from './Button.jsx';
import { Icon } from './Icon.jsx';

const h = React.createElement;

function Logo() {
  return h(
    NavLink,
    { to: '/', className: 'brand', 'aria-label': 'Sample Restaurant top page' },
    h('span', { className: 'brand-mark', 'aria-hidden': 'true' }, h(Icon, { name: 'leaf', size: 29 })),
    h(
      'span',
      { className: 'brand-copy' },
      h('strong', null, business.name),
      h('small', null, business.locationShort.toUpperCase()),
    ),
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  return h(
    'header',
    { className: 'site-header' },
    h('a', { href: '#main-content', className: 'skip-link' }, 'Skip to content'),
    h(
      'div',
      { className: 'header-inner' },
      h(Logo),
      h(
        'button',
        {
          type: 'button',
          className: 'nav-toggle',
          'aria-label': open ? 'Close navigation' : 'Open navigation',
          'aria-expanded': open,
          'aria-controls': 'primary-navigation',
          onClick: () => setOpen((value) => !value),
        },
        h(Icon, { name: open ? 'close' : 'menu', size: 25 }),
      ),
      h(
        'nav',
        {
          id: 'primary-navigation',
          className: `primary-nav${open ? ' is-open' : ''}`,
          'aria-label': 'Primary navigation',
        },
        navItems.map((item) =>
          h(
            NavLink,
            {
              key: item.to,
              to: item.to,
              className: ({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`,
            },
            item.label,
          ),
        ),
        h(Button, { to: business.bookingLink, icon: 'calendar', className: 'mobile-nav-cta' }, 'Book a Table'),
      ),
      h(Button, { to: business.bookingLink, icon: 'calendar', className: 'header-cta' }, 'Book a Table'),
    ),
  );
}
