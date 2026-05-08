import React, { useEffect } from 'react';
import { business, drinks, food, images } from '../data/siteData.js';
import { Button } from '../components/Button.jsx';
import { Icon } from '../components/Icon.jsx';
import { MenuItem } from '../components/MenuItem.jsx';
import { PageHero } from '../components/PageHero.jsx';
import { Reveal, Section } from '../components/Section.jsx';

const h = React.createElement;

function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);
}

function MenuCategory({ title, icon, items }) {
  return h(
    Reveal,
    { className: 'menu-category' },
    h(
      'div',
      { className: 'category-title' },
      h('span', { className: 'category-icon' }, h(Icon, { name: icon, size: 31 })),
      h('div', null, h('h2', null, title), h('span', { className: 'gold-rule small', 'aria-hidden': 'true' })),
    ),
    h(
      'div',
      { className: 'menu-list' },
      items.map((item) => h(MenuItem, { key: item.name, item })),
    ),
  );
}

export function Menu() {
  usePageMeta(
    'Menu | Sample Restaurant',
    'Explore the Sample Restaurant demo menu with fresh coffee, drinks, and casual cafe dishes.',
  );

  return h(
    React.Fragment,
    null,
    h(PageHero, {
      script: 'Explore Our',
      title: 'Our Menu',
      text: 'Fresh ingredients, great taste, made with love every day.',
      image: images.menuHero,
    }),
    h(
      Section,
      { className: 'menu-section' },
      h(
        'div',
        { className: 'menu-grid' },
        h(MenuCategory, { title: 'Drinks', icon: 'cup', items: drinks }),
        h(MenuCategory, { title: 'Food', icon: 'utensils', items: food }),
      ),
    ),
    h(
      'section',
      { className: 'special-request surface-band' },
      h(
        'div',
        { className: 'container special-request-inner' },
        h(Reveal, { className: 'cloche-badge' }, h(Icon, { name: 'cloche', size: 58 })),
        h(
          Reveal,
          { className: 'special-copy', delay: 80 },
          h('h2', null, 'Have a special request', h('br'), 'or dietary need?'),
          h('p', null, 'Let us know. We’re happy to help.'),
        ),
        h(Reveal, { delay: 150 }, h(Button, { to: '/contact', icon: 'chat', variant: 'dark', className: 'special-button' }, 'Contact Us')),
      ),
    ),
  );
}
