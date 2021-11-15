import React from 'react';
import { render, screen } from '@testing-library/react';
import BitContainer from './bit-container.component';

beforeEach(() => {
  render(
    <BitContainer>
      <p>Hello World</p>
    </BitContainer>
  );
});

describe("bit-container component", () => {
  it('render it\'s OK', () => {
    /**
     * Children is rendered
     */
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
