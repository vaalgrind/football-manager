import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsViewerComponent } from './teams-viewer.component';

describe('TeamsViewerComponent', () => {
  let component: TeamsViewerComponent;
  let fixture: ComponentFixture<TeamsViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
