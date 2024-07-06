import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

test('Renders the header with logo and buttons', () => {
  render(<Header />);

  const logo = screen.getByAltText('Lacrei Saúde');
  expect(logo).toBeInTheDocument();

  const homeButton = screen.getByRole('button', { name: /home/i });
  expect(homeButton).toBeInTheDocument();

  const aboutButton = screen.getByRole('button', { name: /quem somos/i });
  expect(aboutButton).toBeInTheDocument();
});
