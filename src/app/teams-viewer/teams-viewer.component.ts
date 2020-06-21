import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { add } from '../actions/team.actions';

@Component({
  selector: 'app-teams-viewer',
  templateUrl: './teams-viewer.component.html',
  styleUrls: ['./teams-viewer.component.scss'],
})
export class TeamsViewerComponent implements OnInit {
  public dataSource: Team[] = [,];
  dataSource$;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor(private store: Store<{ teams: Team[] }>) {
    this.dataSource$ = store.pipe(select('teams'));
  }

  ngOnInit(): void {
    this.store.dispatch(
      add({ id: '1', name: 'Barca', shorcut: 'FCB', owner: 'Pablo' })
    );
  }
}

export interface Team {
  id: string;
  name: string;
  shorcut: string;
  owner: string;
}
