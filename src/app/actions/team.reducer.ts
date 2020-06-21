import { createReducer, on } from '@ngrx/store';
import { add } from './team.actions';
import { Team } from '../teams-viewer/teams-viewer.component';

export const initialState: Team[] = [];

const _teamReducer = createReducer(
  initialState,
  on(add, (state, team) => [...state, team])
);

export function teamReducer(state, action) {
  return _teamReducer(state, action);
}
