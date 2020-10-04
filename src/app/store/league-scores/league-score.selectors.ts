import { createSelector, createFeatureSelector } from '@ngrx/store';
import TeamScore from './team-score.model'

export const featureKey = 'leagueScore';
const selectFeature = createFeatureSelector<{[featureKey]: TeamScore[]},  TeamScore[]>(featureKey);
export const select = createSelector(
  selectFeature,
  (state: TeamScore[]) => state
);
export default select
