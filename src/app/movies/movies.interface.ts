export interface fetchMoviesArgs {
  q: string
  page: number
}

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface MoviesState {
  status: 'idle' | 'loading' | 'failed'
  page: number
  total: number
}