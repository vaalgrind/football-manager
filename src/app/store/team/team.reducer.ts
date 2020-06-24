import { TeamActions, TeamTypes } from './team.actions';
import { Team } from './team.model';

export const initialState: Team[] = [
  { name: 'Barca', id: '1', owner: 'Pablo', shorcut: 'test' },
];

export function TeamReducer(state = initialState, action: TeamActions): Team[] {
  switch (action.type) {
    case TeamTypes.Load:
      return {
        ...state,
      };

    default:
      return state;
  }
}
