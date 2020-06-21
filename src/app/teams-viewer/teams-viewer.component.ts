import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-viewer',
  templateUrl: './teams-viewer.component.html',
  styleUrls: ['./teams-viewer.component.scss'],
})
export class TeamsViewerComponent implements OnInit {
  public dataSource: Team[] = [
    { id: '1', name: 'Barca', shorcut: 'FCB', owner: 'Pablo' },
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor() {}

  ngOnInit(): void {}
}

export interface Team {
  id: string;
  name: string;
  shorcut: string;
  owner: string;
}
