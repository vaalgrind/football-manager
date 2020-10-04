import { TeamsReducer } from './teams/teams.reducer';
import LeagueScoreReducer from './league-scores/league-score.reducer'
export const reducers = {
  teams: TeamsReducer,
  leagueScore: LeagueScoreReducer
};
