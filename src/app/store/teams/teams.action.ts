import { Action } from '@ngrx/store';
import { Team } from '../team/team.model';

export enum TeamsTypes {
  Set = '[Teams] Set',
  Clear = '[Teams] Clear',
  Load = '[Teams] Load',
  Add = '[Teams] Add',
}

export class TeamsSetAction implements Action {
  readonly type = TeamsTypes.Set;
  constructor(readonly payload: Team[]) {}
}

export class TeamsClearAction implements Action {
  readonly type = TeamsTypes.Clear;
}

export class TeamsLoadAction implements Action {
  readonly type = TeamsTypes.Load;
}

export class TeamsAddAction implements Action {
  readonly type = TeamsTypes.Add;
  constructor(readonly payload: Team) {}
}

export type TeamsAction = TeamsLoadAction | TeamsClearAction | TeamsSetAction | TeamsAddAction;
