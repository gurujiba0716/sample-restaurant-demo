import { describe, expect, it } from 'vitest';
import { validateContactForm } from './validation.js';

describe('validateContactForm', () => {
  it('rejects empty required fields', () => {
    const result = validateContactForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    expect(result.isValid).toBe(false);
    expect(result.errors.name).toBe('Please enter your name.');
    expect(result.errors.email).toBe('Please enter your email.');
    expect(result.errors.subject).toBe('Please enter a subject.');
    expect(result.errors.message).toBe('Please write a short message.');
  });

  it('rejects invalid email addresses', () => {
    const result = validateContactForm({
      name: 'Guest',
      email: 'guest',
      subject: 'Booking',
      message: 'I would like a table.',
    });

    expect(result.isValid).toBe(false);
    expect(result.errors.email).toBe('Please enter a valid email address.');
  });

  it('accepts complete contact form data', () => {
    const result = validateContactForm({
      name: 'Guest',
      email: 'guest@example.com',
      subject: 'Booking',
      message: 'I would like a table for two.',
    });

    expect(result).toEqual({
      isValid: true,
      errors: {},
    });
  });
});
