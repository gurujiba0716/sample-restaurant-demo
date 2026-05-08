import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icon.jsx';

const h = React.createElement;

function isExternal(to) {
  return /^https?:\/\//.test(to || '') || /^mailto:|^tel:/.test(to || '');
}

export function Button({
  to,
  href,
  children,
  icon,
  variant = 'primary',
  className = '',
  onClick,
  type,
  full = false,
}) {
  const destination = to || href;
  const classes = `btn btn-${variant}${full ? ' btn-full' : ''} ${className}`.trim();
  const content = [
    icon ? h(Icon, { key: 'icon', name: icon, size: 20 }) : null,
    h('span', { key: 'text' }, children),
  ];

  if (type || !destination) {
    return h('button', { type: type || 'button', className: classes, onClick }, content);
  }

  if (isExternal(destination)) {
    return h(
      'a',
      {
        href: destination,
        className: classes,
        target: '_blank',
        rel: 'noreferrer',
        onClick,
      },
      content,
    );
  }

  return h(Link, { to: destination, className: classes, onClick }, content);
}
