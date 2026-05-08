import React, { useEffect, useRef } from 'react';

const h = React.createElement;

export function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (!('IntersectionObserver' in window)) {
      node.classList.add('is-visible');
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          observer.unobserve(node);
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return h(
    'div',
    {
      ref,
      className: `reveal ${className}`.trim(),
      style: { transitionDelay: `${delay}ms` },
    },
    children,
  );
}

export function Section({ children, className = '', id, narrow = false }) {
  return h(
    'section',
    { id, className: `section ${className}`.trim() },
    h('div', { className: narrow ? 'container container-narrow' : 'container' }, children),
  );
}

export function SectionHeading({ script, title, text, align = 'left' }) {
  return h(
    'div',
    { className: `section-heading section-heading-${align}` },
    script ? h('p', { className: 'script-label' }, script) : null,
    h('h2', null, title),
    h('span', { className: 'gold-rule', 'aria-hidden': 'true' }),
    text ? h('p', { className: 'section-lead' }, text) : null,
  );
}
