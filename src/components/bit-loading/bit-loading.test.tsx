import React from 'react';
import BitLoading from './bit-loading.component';
import { render, screen } from '@testing-library/react';

let setup: any;
beforeEach(() => {
  setup = render(
    <BitLoading isLoading={true} />
  );
});

describe("bit-loading component", () => {
  it('render it\'s OK', () => {
    expect(screen.queryByTestId('loading')).toBeInTheDocument();
  });

  it('updated props isLoading', () => {
    const { rerender } = setup;
    /**
     * Loading is not showing, update isLoading to false
     */
    rerender(
      <BitLoading isLoading={false} />
    );
    expect(screen.queryByTestId('loading')).not.toBeInTheDocument();

    /**
     * Loading is showing, update isLoading to true
     */
     rerender(
      <BitLoading isLoading={true} />
    );
    expect(screen.queryByTestId('loading')).toBeInTheDocument();
  });
});