import React from 'react';
import { render, screen } from '@testing-library/react';
import BitLayout from './bit-layout.component';

beforeEach(() => {
  render(
    <BitLayout>
      <p>Hello World</p>
    </BitLayout>
  );
});

describe("bit-layout component", () => {
  it('render it\'s OK', () => {
    /**
     * Children is rendered
     */
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
