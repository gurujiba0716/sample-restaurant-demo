import React, { useState } from 'react';
import { validateContactForm } from '../utils/validation.js';
import { Button } from './Button.jsx';

const h = React.createElement;

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function Field({ id, label, type = 'text', value, error, onChange, placeholder, multiline = false }) {
  const describedBy = error ? `${id}-error` : undefined;
  const commonProps = {
    id,
    name: id,
    value,
    placeholder,
    onChange: (event) => onChange(id, event.target.value),
    'aria-invalid': Boolean(error),
    'aria-describedby': describedBy,
  };

  return h(
    'div',
    { className: `form-field${error ? ' has-error' : ''}` },
    h('label', { htmlFor: id }, label),
    multiline
      ? h('textarea', { ...commonProps, rows: 7 })
      : h('input', { ...commonProps, type }),
    error ? h('p', { id: describedBy, className: 'field-error' }, error) : null,
  );
}

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function handleChange(field, value) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSent(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const result = validateContactForm(values);
    setErrors(result.errors);

    if (!result.isValid) return;

    setValues(initialValues);
    setSent(true);
  }

  return h(
    'form',
    { className: 'contact-form', onSubmit: handleSubmit, noValidate: true },
    h(Field, {
      id: 'name',
      label: 'Your Name',
      value: values.name,
      error: errors.name,
      onChange: handleChange,
      placeholder: 'Enter your name',
    }),
    h(Field, {
      id: 'email',
      label: 'Your Email',
      type: 'email',
      value: values.email,
      error: errors.email,
      onChange: handleChange,
      placeholder: 'Enter your email',
    }),
    h(Field, {
      id: 'subject',
      label: 'Subject',
      value: values.subject,
      error: errors.subject,
      onChange: handleChange,
      placeholder: 'Enter subject',
    }),
    h(Field, {
      id: 'message',
      label: 'Your Message',
      value: values.message,
      error: errors.message,
      onChange: handleChange,
      placeholder: 'Write your message here...',
      multiline: true,
    }),
    h(Button, { type: 'submit', icon: 'telegram', full: true }, 'Send Message'),
    sent ? h('p', { className: 'form-success', role: 'status' }, 'Thank you. This demo form is ready to connect to your booking or email system.') : null,
  );
}
