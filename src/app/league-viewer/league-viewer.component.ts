import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import selectFeature from '../store/league-scores/league-score.selectors'
import {Add} from '../store/league-scores/league-scores.actions'
@Component({
  selector: 'league-viewer',
  templateUrl: './league-viewer.component.html',
  styleUrls: ['./league-viewer.component.scss'],
})
export class LeagueViewerComponent {
  leaguesScores$ = this.store.select(selectFeature)
  displayedColumns: string[] = ['id', 'name', 'score'];

  constructor(private store: Store) {
    this.store.dispatch(Add({ id: 'asdasd11', name: "Zabka Squad", score: 21 }));
  }
}
