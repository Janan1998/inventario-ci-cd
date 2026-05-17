import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {

  it('muestra titulo', () => {

    render(<App />);

    const titulo = screen.getByText(/Inventario Web/i);

    expect(titulo).toBeDefined();

  });

});