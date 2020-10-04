import { Action, createReducer, on } from '@ngrx/store';
import * as Actions from './league-scores.actions';
import TeamScore from './team-score.model';


export const initialState: TeamScore[] =[
  {
    id: "1d",
    name: "FC końskie tornado",
    score: 42
  },
  {
    id: "44a",
    name: "Real czarnów",
    score: 1
  },
  {
    id: "f1d",
    name: "Korona Kielce",
    score: 66
  }
]

const leagueScoreReducer = createReducer(
  initialState,
  on(Actions.Set, (state, {scores}) => scores),
  on(Actions.Clear, state => []),
  on(Actions.Add, (state, score) => [...state, score]),
  on(Actions.Load, (state) => state) // TODO load from BE -> effect
);

export default function reducer(state: TeamScore[] | undefined, action: Action) {
  return leagueScoreReducer(state, action);
}
