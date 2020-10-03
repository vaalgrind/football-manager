import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Team } from './team.model';
import { TEAMS_SELECT } from './team.const';

@Injectable({providedIn: 'root'})
export class TeamService {
  constructor(private store: Store<{ teams: Team[] }>) {}

  getTeams(): Observable<Team[]> {
    return this.store.pipe(select(TEAMS_SELECT));
  }
}
