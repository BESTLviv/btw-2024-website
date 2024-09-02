import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpeakerCardService {

  private isModalOpen = new BehaviorSubject(false);

  currentData = this.isModalOpen.asObservable();

  constructor() { }

  changeData(data: boolean) {
    this.isModalOpen.next(data);
  }

}
