const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TRACK_METADATA':
      return {
        ...state,
        trackName: action.payload.name,
        duration: Math.floor(action.payload.duration)
      };
    case 'PLAY':
      return {
        ...state,
        playing: true
      };
    case 'PLAY_FROM_BEGINNING':
      return {
        ...state,
        playing: true,
        currentTime: 0
      };
    case 'PAUSE':
      return {
        ...state,
        playing: false,
        currentTime: action.payload
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default Reducer;