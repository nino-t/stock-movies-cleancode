import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BitInfiniteScrollPagination from './bit-infinite-scroll-pagination.component';
import makeArrayOfRange from '../../utils/make-arrayof-range';

let setup: any;
let initialProps: any;

beforeEach(() => {
  global.alert = jest.fn();
  let results: number[] = makeArrayOfRange(1, 10);
  const total = results.length;
  const totalInResponse = 30;
  const page = 1;

  initialProps = {
    isLoading: false,
    total: total,
    totalInResponse: totalInResponse,
    page: page,
    loadMoreHandler: (_nextpage: number) => {
      alert('OK!');
    }
  }

  setup = render(
    <div data-testid="container">
      <BitInfiniteScrollPagination {...initialProps}>
        <ul>
          {
            results.map((i) => (
              <li key={i} data-testid="list">Element render of {i}</li>
            ))
          }
        </ul>
      </BitInfiniteScrollPagination>
    </div>
  );
});

describe('bit-infinite-scroll-pagination', () => {
  it('render it\'s OK', () => {
    /**
     * Check children element is rendered
     */
    expect(screen.queryByText('Element render of 1')).toBeInTheDocument();
    expect(screen.queryByText('Element render of 2')).toBeInTheDocument();
    expect(screen.queryAllByTestId('list').length).toBe(10);
  });

  it('loading indicator is\'s OK', () => {
    /**
     * Check loader in showing when isLoading props is setted to true
     */
    const { rerender } = setup;
    const results: number[] = makeArrayOfRange(1, 10);
    rerender(
      <BitInfiniteScrollPagination
        {...initialProps}
        isLoading={true}
      >
        <ul>
          {
            results.map((i) => (
              <li key={i} role="list">Element render of {i}</li>
            ))
          }
        </ul>
      </BitInfiniteScrollPagination>
    );

    expect(screen.queryByTestId('bit-infinite-scroll-loader')).toBeInTheDocument();
  });

  it('fire event document scrolling to bottom is\'s OK', () => {
    /**
     * Check scroll with condition:
     * const avaibleNextRequest = !isLoading && (scrollTop + clientHeight >= scrollHeight) && total < totalInResponse;
     */
    expect(screen.queryAllByTestId('list').length).toBeLessThan(30);
    fireEvent.scroll(window, {
      target: {
        scrollY: 1000
      }
    });
    expect(global.alert).toHaveBeenCalled();
  });

  it('fire event document scrolling to bottom fired only when total < totalInResponse it\'s OK', () => {
    /**
     * Check rerender component with props totalInResponse be the same with total
     * Which the total value is 10
     * And the event should not been called
     */
    const { rerender } = setup;
    const results: number[] = makeArrayOfRange(1, 10);
    rerender(
      <BitInfiniteScrollPagination
        {...initialProps}
        totalInResponse={10}
      >
        <ul>
          {
            results.map((i) => (
              <li key={i} role="list">Element render of {i}</li>
            ))
          }
        </ul>
      </BitInfiniteScrollPagination>
    );
    fireEvent.scroll(window, {
      target: {
        scrollY: 1000
      }
    });
    expect(global.alert).not.toHaveBeenCalled();
  });
});