import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BitNavMenu from './bit-nav-menu.component';

beforeEach(() => {
  render(
    <BrowserRouter>
      <BitNavMenu
        menus={[
          {
            label: 'Home',
            href: '/'
          },
          {
            label: 'Foo',
            href: '/foo'
          }
        ]}
      />

      <Switch>
        <Route exact path='/' component={() => <p>Welcome!</p>} />
        <Route path='/foo' component={() => <p>Foo!</p>} />
      </Switch>
    </BrowserRouter>
  );
});

describe("bit-navbar-menu component", () => {
  it('render it\'s OK', () => {
    /**
     * list of menu is exist and rendered
     */
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Foo')).toBeInTheDocument();
  });

  it('page movement it\'s OK', () => {
    /**
     * Check in root path
     */
    expect(screen.queryByText('Welcome!'));

    /**
     * Fire user-event and moving to /foo and check page is already moved
     */
    userEvent.click(screen.getByText('Foo'));
    expect(screen.queryByText('Welcome!')).not.toBeInTheDocument();
    expect(screen.queryByText('Foo!')).toBeInTheDocument();
  });
});
