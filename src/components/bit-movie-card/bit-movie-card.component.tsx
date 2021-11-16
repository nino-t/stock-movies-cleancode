import React from 'react';
import { Link } from 'react-router-dom';
import * as s from './bit-movie-card.styled';
import * as i from './bit-movie-card.interface';
import nullImage from '../../assets/images/null-image.png';

const BitMovieCard: React.FC<i.BitMovieCardProps> = ({ id, poster, title, year, type, handlePosterClick }) => {
  return (
    <s.Wrapper>
      <s.Poster
        src={poster}
        alt={title}
        onClick={handlePosterClick}
        onError={(e: any)=> {e.target.onerror = null; e.target.src = nullImage }}
      />
      <div className="py-2">
        <s.Year className="mb-1">{type}, {year}</s.Year>
        <Link to={`/watch?v=${id}`}>
          <s.Title>{title}</s.Title>
        </Link>
      </div>
    </s.Wrapper>
  );
}

export default React.memo(BitMovieCard);