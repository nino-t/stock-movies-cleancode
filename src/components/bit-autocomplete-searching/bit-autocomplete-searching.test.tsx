import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import BitAutocompleteSearching from './bit-autocomplete-searching.component';

beforeEach(() => {
  global.alert = jest.fn();
  render(
    <BitAutocompleteSearching
      results={[
        {
          title: 'Naruto',
          clickHandler: () => alert('Hi Naruto!')
        },
        {
          title: 'Batman',
          clickHandler: () => alert('Hi Batman!')
        }
      ]}
    />
  );
});

describe("bit-autocomplete-searching component", () => {
  it('render is\'s OK', () => {
    /**
     * Check list of results is rendered
     */
    expect(screen.queryByText('Naruto')).toBeInTheDocument();
    expect(screen.queryByText('Batman')).toBeInTheDocument();

    /**
     * Fire user-event click item of menus and the function handler has been called
     */
    userEvent.click(screen.getByText('Naruto'));
    expect(global.alert).toHaveBeenCalled();
  });
});