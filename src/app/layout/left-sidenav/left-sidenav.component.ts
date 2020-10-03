import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/modules/core/layout.service';

@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.scss'],
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          width: '200px',
        })
      ),
      state(
        'out',
        style({
          width: '0',
        })
      ),
      transition('in => out', animate('200ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out')),
    ]),
  ],
})
export class LeftSidenavComponent implements OnInit {
  constructor(public layoutService: LayoutService) {}

  ngOnInit(): void {}
}
