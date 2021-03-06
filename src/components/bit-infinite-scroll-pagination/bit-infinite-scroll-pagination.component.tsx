import React from 'react';
import Spinner from 'react-spinkit';
import * as s from './bit-infinite-scroll-pagination.styled';
import * as i from './bit-infinite-scroll-pagination.interface';

const BitInfiniteScrollPagination: React.FC<i.BitInfiniteScrollPaginationProps> = ({
  page,
  total,
  children,
  isLoading,
  totalInResponse,
  loadMoreHandler
}) => {
  const infiniteScrollRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const isScrolling = (): void => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const avaibleNextRequest = !isLoading && (scrollTop + clientHeight >= scrollHeight) && total < totalInResponse;

      if (avaibleNextRequest) {
        loadMoreHandler(page + 1);
      }
    }

    window.addEventListener('scroll', isScrolling);
    return () => window.removeEventListener('scroll', isScrolling);
  }, [isLoading, loadMoreHandler, page, total, totalInResponse]);

  return (
    <React.Fragment>
      <s.InfiniteScroll ref={infiniteScrollRef}>
        {children}
      </s.InfiniteScroll>
      <MemoLoading isLoading={isLoading} />
    </React.Fragment>
  );
}

const Loading: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <React.Fragment>
      {
        isLoading &&
          <s.Loader data-testid="bit-infinite-scroll-loader">
            <Spinner name="line-scale" fadeIn="none" />
          </s.Loader>
      }
    </React.Fragment>
  );
}
const MemoLoading = React.memo(Loading);

export default BitInfiniteScrollPagination;