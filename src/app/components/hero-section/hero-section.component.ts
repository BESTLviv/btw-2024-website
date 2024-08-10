import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";
import {StarBackgroundComponent} from "../star-background/star-background.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    StarBackgroundComponent,
    NgOptimizedImage
  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  private targetDate: Date = new Date('2024-09-08T23:59:59');

  days: string = '13';
  hours: string = '13';
  minutes: string = '13';
  seconds: string = '13';

  private subscription!: Subscription;

  constructor() { }

  ngOnInit() {
    this.subscription = interval(1000)
      .subscribe(x => { this.getTimeDifference(); });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getTimeDifference() {
    const targetDate = new Date(this.targetDate).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      this.days = this.padZero(days);
      this.hours = this.padZero(hours);
      this.minutes = this.padZero(minutes);
      this.seconds = this.padZero(seconds);
    } else {
      this.days = '00';
      this.hours = '00';
      this.minutes = '00';
      this.seconds = '00';
      this.subscription.unsubscribe();
    }
  }

  private padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }
}
