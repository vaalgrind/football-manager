import { createAction, props, Action } from '@ngrx/store';
import { Team } from './team.model';

export enum TeamTypes {
  Load = '[User] Load user',
}

export class TeamLoadAction implements Action {
  readonly type = TeamTypes.Load;
  constructor(readonly payload: Team) {}
}

export type TeamActions = TeamLoadAction;
