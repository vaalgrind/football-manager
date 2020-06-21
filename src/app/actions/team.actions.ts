import { createAction, props } from '@ngrx/store';
import { Team } from '../teams-viewer/teams-viewer.component';

export const add = createAction('[Teams] Team Added', props<Team>());
