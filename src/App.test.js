import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  window.matchMedia = window.matchMedia || (() => ({ matches: false }));
});

test('renders name, selected work and experience', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: 'Gautam Parmar' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Selected work' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Experience' })).toBeInTheDocument();
});
