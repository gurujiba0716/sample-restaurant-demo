import React, { useEffect } from 'react';
import { business, images } from '../data/siteData.js';
import { Button } from '../components/Button.jsx';
import { ContactForm } from '../components/ContactForm.jsx';
import { Icon } from '../components/Icon.jsx';
import { MapPlaceholder } from '../components/MapPlaceholder.jsx';
import { PageHero } from '../components/PageHero.jsx';
import { Reveal, Section } from '../components/Section.jsx';

const h = React.createElement;

function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);
}

function InfoRow({ icon, title, children }) {
  return h(
    'div',
    { className: 'info-row' },
    h('span', { className: 'info-icon' }, h(Icon, { name: icon, size: 31 })),
    h('div', null, h('h3', null, title), h('p', null, children)),
  );
}

function ContactPanel({ title, icon, children, className = '' }) {
  return h(
    Reveal,
    { className: `contact-panel ${className}`.trim() },
    h(
      'div',
      { className: 'panel-title' },
      h('span', { className: 'category-icon' }, h(Icon, { name: icon, size: 32 })),
      h('div', null, h('h2', null, title), h('span', { className: 'gold-rule small', 'aria-hidden': 'true' })),
    ),
    children,
  );
}

export function Contact() {
  usePageMeta(
    'Contact Us | Sample Restaurant',
    'Contact Sample Restaurant in Phnom Penh by phone, email, Telegram, Messenger, or demo contact form.',
  );

  return h(
    React.Fragment,
    null,
    h(PageHero, {
      title: 'Contact Us',
      text: 'We’d love to hear from you. Reach out to us anytime.',
      image: images.contactHero,
      overlay: true,
    }),
    h(
      Section,
      { className: 'contact-section', id: 'reservation' },
      h(
        'div',
        { className: 'contact-grid' },
        h(
          'div',
          { className: 'contact-left' },
          h(
            ContactPanel,
            { title: 'Get in Touch', icon: 'phone' },
            h(InfoRow, { icon: 'pin', title: 'Address' }, '#123 Street 123, BKK1', h('br'), 'Phnom Penh, Cambodia'),
            h(InfoRow, { icon: 'phone', title: 'Phone' }, business.phone),
            h(InfoRow, { icon: 'mail', title: 'Email' }, business.email),
            h(InfoRow, { icon: 'clock', title: 'Opening Hours' }, 'Mon - Fri: 7:00 AM - 10:00 PM', h('br'), 'Sat - Sun: 7:00 AM - 11:00 PM'),
          ),
          h(
            ContactPanel,
            { title: 'Message Us', icon: 'telegram', className: 'message-panel' },
            h('p', null, 'Chat with us easily on Telegram or Messenger.'),
            h(
              'div',
              { className: 'stacked-actions' },
              h(Button, { href: business.telegramLink, icon: 'telegram', variant: 'telegram' }, 'Message on Telegram'),
              h(Button, { href: business.messengerLink, icon: 'messenger', variant: 'messenger' }, 'Message on Messenger'),
            ),
          ),
        ),
        h(
          ContactPanel,
          { title: 'Send Us a Message', icon: 'mail', className: 'form-panel' },
          h(ContactForm),
        ),
      ),
    ),
    h(MapPlaceholder),
  );
}
