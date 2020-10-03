import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../store/team/team.model';
import { TeamsService } from '../store/teams/teams.service';

@Component({
  selector: 'app-teams-viewer',
  templateUrl: './teams-viewer.component.html',
  styleUrls: ['./teams-viewer.component.scss'],
})
export class TeamsViewerComponent implements OnInit {
  public teams$: Observable<Team[]>;
  displayedColumns: string[] = ['position', 'name',  'user'];
  constructor(private teamsService: TeamsService) {}

  ngOnInit(): void {
    this.teams$ = this.teamsService.getTeams();
    this.teamsService.addTeam({ id: '2', name: 'test', userId: '1' });
  }
}
