import React from 'react';
import * as s from './bit-movie-details.styled';
import * as i from './bit-movie-details.interface';
import nullImage from '../../assets/images/null-image.png';

const BitMovieDetails: React.FC<i.BitMovieDetailsProps> = ({ title, plot, poster, year, rated, released, runtime, genre, actors, writer }) => {
  return (
    <s.Wrapper>
      <div className="w-2/12">
        <s.Poster
          src={poster}
          alt={title}
          onError={(e: any)=> {e.target.onerror = null; e.target.src = nullImage }}
        />
      </div>
      <div className="py-2 px-8 bg-white w-10/12" style={{ border: '1px solid #BE123C' }}>
        <s.Title>{title}</s.Title>
        <s.Synopsis className="mb-4">{plot}</s.Synopsis>
        <div className="mb-4">
          <b>Year</b>
          <p>{year}</p>
        </div>
        <div className="mb-4">
          <b>Rated</b>
          <p>{rated}</p>
        </div>
        <div className="mb-4">
          <b>Released</b>
          <p>{released}</p>
        </div>
        <div className="mb-4">
          <b>Runtime</b>
          <p>{runtime}</p>
        </div>
        <div className="mb-4">
          <b>Genre</b>
          <p>{genre}</p>
        </div>
        <div className="mb-4">
          <b>Actors</b>
          <p>{actors}</p>
        </div>
        <div className="mb-4">
          <b>Writer</b>
          <p>{writer}</p>
        </div>
      </div>
    </s.Wrapper>
  );
}

export default React.memo(BitMovieDetails);