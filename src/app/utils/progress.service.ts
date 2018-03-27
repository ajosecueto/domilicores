import {Injectable} from '@angular/core';

@Injectable()
export class ProgressService {

  public progress = false;

  constructor() {
    this.progress = false;
  }

  start() {
    setTimeout(() => {
      this.progress = true;
    }, 200);
  }

  stop() {
    setTimeout(() => {
      this.progress = false;
    }, 1000);
  }

}
