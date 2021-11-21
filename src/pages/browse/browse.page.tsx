import React from 'react';
import BitContainer from '../../components/bit-container/bit-container.component';
import Layout from '../../features/layout/layout.feature';
import MovieLists from '../../features/movie-lists/movie-lists.feature';

const BrowsePage: React.FC = () => {
  return (
    <Layout>
      <BitContainer>
        <div className="mt-28" data-testid="browse-page-indicator" />
        <MovieLists />
      </BitContainer>
    </Layout>
  )
}

export default BrowsePage;