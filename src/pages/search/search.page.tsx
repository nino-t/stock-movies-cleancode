import React from 'react';
import Layout from '../../features/layout/layout.feature';
import MovieSearch from '../../features/movie-search/movie-search.feature';
import BitContainer from '../../components/bit-container/bit-container.component';

const SearchPage: React.FC = () => {
  return (
    <Layout>
      <BitContainer>
        <div className="mt-28" data-testid="search-page-indicator" />
        <MovieSearch />
      </BitContainer>
    </Layout>
  )
}

export default SearchPage;