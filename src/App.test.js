import { render, screen } from '@testing-library/react';
import App from './App';

test('renders JCI Sbikha branding', () => {
  render(<App />);
  // Updated to reflect new JCI Sbikha branding
  const linkElement = screen.getByText(/JCI Sbikha/i);
  expect(linkElement).toBeInTheDocument();
});