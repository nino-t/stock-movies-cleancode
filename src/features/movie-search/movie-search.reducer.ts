import * as i from './movie-search.interface';

const reducer = (state: i.State, action: i.Action): i.State => {
  switch (action.type) {
    case 'request':
      return {
        ...state,
        status: 'loading'
      };
    case 'success':
      return {
        ...state,
        status: 'idle',
        page: action.payload.page,
        total: action.payload.total,
        data: action.payload.page === 1 ? action.payload.data : [
          ...state.data,
          ...action.payload.data
        ]
      };
    case 'failure':
      return {
        ...state,
        status: 'failed'
      };
  }
}

export default reducer;