import React from 'react';
import { Link } from 'react-router-dom';
import { business, navItems } from '../data/siteData.js';
import { Button } from './Button.jsx';
import { Icon } from './Icon.jsx';

const h = React.createElement;

function FooterColumn({ title, children }) {
  return h('div', { className: 'footer-column' }, h('h2', null, title), children);
}

export function Footer() {
  return h(
    'footer',
    { className: 'site-footer' },
    h(
      'div',
      { className: 'container footer-grid' },
      h(
        'div',
        { className: 'footer-brand' },
        h(
          'div',
          { className: 'footer-logo' },
          h(Icon, { name: 'leaf', size: 28 }),
          h('strong', null, business.name),
        ),
        h('p', null, business.tagline),
        h(
          'div',
          { className: 'social-links', 'aria-label': 'Social links' },
          h('a', { href: '#', 'aria-label': 'Facebook placeholder' }, h(Icon, { name: 'facebook', size: 21 })),
          h('a', { href: '#', 'aria-label': 'Instagram placeholder' }, h(Icon, { name: 'instagram', size: 21 })),
          h('a', { href: '#', 'aria-label': 'Travel review placeholder' }, h(Icon, { name: 'trip', size: 21 })),
        ),
      ),
      h(
        FooterColumn,
        { title: 'Address' },
        h(
          'p',
          { className: 'footer-icon-line' },
          h(Icon, { name: 'pin', size: 18 }),
          h('span', null, '#123 Street 123, BKK1', h('br'), 'Phnom Penh', h('br'), 'Cambodia'),
        ),
      ),
      h(
        FooterColumn,
        { title: 'Opening Hours' },
        h(
          'p',
          { className: 'footer-icon-line' },
          h(Icon, { name: 'clock', size: 18 }),
          h('span', null, 'Mon - Fri', h('br'), '7:00 AM - 10:00 PM'),
        ),
        h('p', null, 'Sat - Sun', h('br'), '7:00 AM - 11:00 PM'),
      ),
      h(
        FooterColumn,
        { title: 'Quick Links' },
        h(
          'ul',
          { className: 'footer-links' },
          navItems.map((item) => h('li', { key: item.to }, h(Link, { to: item.to }, item.label))),
        ),
      ),
      h(
        FooterColumn,
        { title: 'Book a Table' },
        h('p', null, 'We look forward to welcoming you.'),
        h(Button, { to: business.bookingLink, icon: 'calendar', className: 'footer-cta' }, 'Book a Table'),
      ),
    ),
    h(
      'div',
      { className: 'footer-bottom' },
      h('p', null, '© 2024 Sample Restaurant. All rights reserved.'),
      h('p', { className: 'demo-label' }, 'Demo concept'),
    ),
  );
}
