import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  private _firstInputWarning = new BehaviorSubject<boolean>(false);
  private _secondInputWarning = new BehaviorSubject<boolean>(false);

  constructor() {}

  clearFirstInputWarning() {
    this._firstInputWarning.next(false);
  }

  clearSecondInputWarning() {
    this._secondInputWarning.next(false);
  }

  startFirstInputWarning() {
    this._firstInputWarning.next(true);
  }

  startSecondInputWarning() {
    this._secondInputWarning.next(true);
  }

  finishFirstStartSecondWarning() {
    this.clearFirstInputWarning();
    this.startSecondInputWarning();
  }

  finishSecondStartFirstWarning() {
    this.clearSecondInputWarning();
    this.startFirstInputWarning();
  }

  get firstInputWarning() {
    return this._firstInputWarning.asObservable();
  }

  get secondInputWarning() {
    return this._secondInputWarning.asObservable();
  }
}
