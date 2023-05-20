import { fireEvent, render, screen } from '@testing-library/react';
import RegisterContent from '../components/login/RegisterContent';

test('name input should be rendered', () => {
  render(<RegisterContent />);
  const nameInputEl = screen.getByPlaceholderText(/Your name/i);
  expect(nameInputEl).toBeInTheDocument();
});

test('lastname input should be rendered', () => {
  render(<RegisterContent />);
  const lastnameInputEl = screen.getByPlaceholderText(/Your lastname/i);
  expect(lastnameInputEl).toBeInTheDocument();
});

test('email input should be rendered', () => {
  render(<RegisterContent />);
  const emailInputEl = screen.getByPlaceholderText(/Your email/i);
  expect(emailInputEl).toBeInTheDocument();
});

test('password input should be rendered', () => {
  render(<RegisterContent />);
  const passwordInputEl = screen.getByPlaceholderText(/Your password/i);
  expect(passwordInputEl).toBeInTheDocument();
});

test('button should be rendered', () => {
  render(<RegisterContent />);
  const buttonEl = screen.getByRole('button');
  expect(buttonEl).toBeInTheDocument();
});

test('user should be rendered after fetching', async () => {
  render(<RegisterContent />);
  const buttonEl = screen.getByRole('button');
  const nameInputEl = screen.getByPlaceholderText(/Your name/i);
  const lastnameInputEl = screen.getByPlaceholderText(/Your lastname/i);
  const emailInputEl = screen.getByPlaceholderText(/Your email/i);
  const passwordInputEl = screen.getByPlaceholderText(/Your password/i);

  const testValue = 'test';

  fireEvent.change(nameInputEl, { target: { value: testValue } });
  fireEvent.change(lastnameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.change(emailInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);
});
