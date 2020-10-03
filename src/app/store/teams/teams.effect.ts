import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TeamsSetAction, TeamsTypes } from './teams.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Team } from '../team/team.model';
@Injectable()
export class TeamsEffect {
  constructor(private httpClient: HttpClient, private actions$: Actions) {}

  @Effect()
  loadTeams$: Observable<Action> = this.actions$.pipe(
    ofType(TeamsTypes.Load),
    switchMap(() =>
      this.httpClient.get('').pipe(
        map((data: Team[]) => new TeamsSetAction(data)),
        catchError(() => of({ type: 'SOME_ERROR' }))
      )
    )
  );
}
