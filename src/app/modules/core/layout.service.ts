import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private readonly _isLeftSidenavCollapsed: BehaviorSubject<
    boolean
  > = new BehaviorSubject<boolean>(true);
  public isLeftSidenavCollapsed$: Observable<
    boolean
  > = this._isLeftSidenavCollapsed.asObservable();

  constructor() {}

  public toggleLeftSidenav() {
    this.isLeftSidenavCollapsed = !this.isLeftSidenavCollapsed;
  }

  set isLeftSidenavCollapsed(value: boolean) {
    this._isLeftSidenavCollapsed.next(value);
  }

  get isLeftSidenavCollapsed(): boolean {
    return this._isLeftSidenavCollapsed.getValue();
  }
}
