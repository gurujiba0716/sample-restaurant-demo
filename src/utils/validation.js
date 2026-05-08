export function validateContactForm(values) {
  const errors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.name?.trim()) {
    errors.name = 'Please enter your name.';
  }

  if (!values.email?.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.subject?.trim()) {
    errors.subject = 'Please enter a subject.';
  }

  if (!values.message?.trim()) {
    errors.message = 'Please write a short message.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
