import { combineReducers } from 'redux';
import trendTracks from './trendTracks';
import artistInfo from './artistInfo';
import searchingTracks from './serchingTracks';

export default combineReducers({
   trendTracks,
   artistInfo,
   searchingTracks 
});