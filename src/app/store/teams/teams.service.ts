import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { Team } from '../team/team.model';
import { TeamsAddAction, TeamsLoadAction } from './teams.action';
import { TEAMS_SELECT } from './teams.const';

@Injectable()
export class TeamsService {
  constructor(private store: Store<{ teams: Team[] }>) {
    this.loadTeams();
  }

  getTeams(): Observable<Team[]> {
    return this.store.pipe(select(TEAMS_SELECT));
  }

  loadTeams(): void {
    this.store.dispatch(new TeamsLoadAction());
  }

  addTeam(item: Team): void {
    this.store.dispatch(new TeamsAddAction(item));
  }
}
