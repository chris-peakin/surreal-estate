import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders the text surreal estate', () => {
  render(<App />);
  const linkElement = screen.getByText(/surreal estate/i);
  expect(linkElement).toBeInTheDocument();
});
