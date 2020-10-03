import { Team } from '../team/team.model';
import { TeamsAction, TeamsTypes } from './teams.action';

export const initialState: Team[] = [];

export function TeamsReducer(
  state = initialState,
  action: TeamsAction
): Team[] {
  switch (action.type) {
    case TeamsTypes.Set:
      return action.payload;

    case TeamsTypes.Clear:
      return [];

    case TeamsTypes.Add:
      return state.concat([action.payload]);

    default:
      return state;
  }
}
