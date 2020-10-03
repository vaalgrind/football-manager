import { Component } from '@angular/core';
import { LayoutService } from './modules/core/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public layoutService: LayoutService) {}
}
