import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import BitNavbarBrand from './bit-navbar-brand.component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

let setup: any;
beforeEach(() => {
  setup = render(
    <BrowserRouter>
      <BitNavbarBrand
        image={'https://upload.wikimedia.org/wikipedia/commons/6/6a/PNG_Test.png'}
        title={'MovieStock'}
        href={'/foo'}
      />

      <Switch>
        <Route exact path='/' component={() => <p>Welcome!</p>} />
        <Route path='/foo' component={() => <p>Foo!</p>} />
      </Switch>
    </BrowserRouter>
  );
});

describe("bit-navbar-brand component", () => {
  it('renders it\'s OK', () => {
    /**
     * Check text title is exist and setted.
     */
    expect(screen.getByText('MovieStock')).toBeInTheDocument();

    /**
     * Check source image according to props image.
     */
    expect(screen.getByAltText('MovieStock')).toHaveAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/6/6a/PNG_Test.png');

    /**
     * Check link according to props href.
     */
    expect(screen.getByAltText('MovieStock').closest('a')).toHaveAttribute('href', '/foo');
  });

  it('update props it\'s OK', () => {
    /**
     * Update props
     */
    const { rerender } = setup;
    rerender(
      <BrowserRouter>
        <BitNavbarBrand
          image={'example.png'}
          title={'MovieStock in update'}
          href={'/foo-bar'}
        />

        <Switch>
          <Route exact path='/' component={() => <p>Welcome!</p>} />
          <Route path='/foo' component={() => <p>Foo!</p>} />
        </Switch>
      </BrowserRouter>
    );

    /**
     * Check text title is exist and setted.
     */
    expect(screen.getByText('MovieStock in update')).toBeInTheDocument();

    /**
     * Check source image according to props image.
     */
    expect(screen.getByAltText('MovieStock in update')).toHaveAttribute('src', 'example.png');

    /**
     * Check link according to props href.
     */
    expect(screen.getByAltText('MovieStock in update').closest('a')).toHaveAttribute('href', '/foo-bar');
  });

  it('move pages by pressing the logo it\'s OK', () => {
    const target = screen.getByAltText('MovieStock').closest('a') as HTMLAnchorElement;

    /**
     * Check target link is /foo
     */
    expect(target).not.toBeNull();
    expect(target).toHaveAttribute('href', '/foo');

    /**
     * Check page position is in root or base url
     */
    expect(screen.getByText('Welcome!')).toBeInTheDocument();

    /**
     * Fire user-event and moving to /foo and check page is already moved
     */
    userEvent.click(target);
    expect(screen.queryByText('Welcome!')).not.toBeInTheDocument();
    expect(screen.getByText('Foo!')).toBeInTheDocument();
  });
});
