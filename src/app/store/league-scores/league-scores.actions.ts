import TeamScore from './team-score.model';
import { createAction, props } from '@ngrx/store';

enum LeagueScoreActionTypes {
  Set = '[Teams] Set',
  Clear = '[Teams] Clear',
  Load = '[Teams] Load',
  Add = '[Teams] Add',
}

export const Clear = createAction(
  LeagueScoreActionTypes.Clear
);

export const Set = createAction(
  LeagueScoreActionTypes.Set,
  props<{scores: TeamScore[]}>()
);

export const Load = createAction(
  LeagueScoreActionTypes.Load
);

export const Add = createAction(
  LeagueScoreActionTypes.Add,
  props<TeamScore>()
);
