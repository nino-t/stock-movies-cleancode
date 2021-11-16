import React from 'react';
import { render, screen } from '@testing-library/react';
import BitNavbarSearch from './bit-navbar-search.component';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  global.alert = jest.fn();
  render(
    <BitNavbarSearch
      value={'Batman'}
      placeholder={'Search...'}
      handleSearch={() => {
        alert('OK!');
      }}
    />
  );
});

describe('bit-navbar-search component', () => {
  it ('render is\'s OK', () => {
    /**
     * Check all props has been rendered
     */
    expect(screen.getByRole('searchbox')).toHaveAttribute('placeholder', 'Search...');
    expect(screen.getByRole('searchbox')).toHaveAttribute('value', 'Batman');
  });

  it('fire user-event to trigger form search submit it\'s OK', () => {
    /**
     * Fire user-event by triggering submit button and search handler function wil be called.
     */
    userEvent.click(screen.getByRole('button'));
    expect(global.alert).toHaveBeenCalled();
  });
});