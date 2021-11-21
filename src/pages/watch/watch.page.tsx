import React from 'react';
import Layout from '../../features/layout/layout.feature';
import MovieDetails from '../../features/movie-details/movie-details.feature';
import BitContainer from '../../components/bit-container/bit-container.component';

const WatchPage: React.FC = () => {
  return (
    <Layout>
      <BitContainer>
        <div className="mt-28" data-testid="watch-page-indicator" />
        <MovieDetails />
      </BitContainer>
    </Layout>
  );
}

export default WatchPage;