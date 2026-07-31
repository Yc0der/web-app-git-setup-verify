import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: /hello, vite \+ react!/i }),
    ).toBeInTheDocument();
  });

  it('increments the counter on click', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    fireEvent.click(button);
    expect(
      screen.getByRole('button', { name: /count is 1/i }),
    ).toBeInTheDocument();
  });
});
