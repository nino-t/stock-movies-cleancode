import React from 'react';
import BitContainer from '../../components/bit-container/bit-container.component';
import Layout from '../../features/layout/layout.feature';

const WatchPage: React.FC = () => {
  return (
    <Layout>
      <BitContainer>
        <div className="mt-28" />
        <p>Hello World</p>
      </BitContainer>
    </Layout>
  );
}

export default WatchPage;