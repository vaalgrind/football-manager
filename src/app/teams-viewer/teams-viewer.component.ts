import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Team } from '../store/team/team.model';
import { TeamService } from '../store/team/team.service';
// import { add } from '../store/team/team.actions';

@Component({
  selector: 'app-teams-viewer',
  templateUrl: './teams-viewer.component.html',
  styleUrls: ['./teams-viewer.component.scss'],
})
export class TeamsViewerComponent implements OnInit {
  public dataSource: Team[] = [];
  dataSource$;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor(private teamService: TeamService) {
  }

  ngOnInit(): void {
    this.dataSource$ = this.teamService.getTeams();
  }
}
