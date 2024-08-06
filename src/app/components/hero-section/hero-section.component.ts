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

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

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
      this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((difference % (1000 * 60)) / 1000);
    } else {
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      this.subscription.unsubscribe();
    }
  }
}

