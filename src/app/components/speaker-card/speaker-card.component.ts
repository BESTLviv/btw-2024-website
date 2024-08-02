import {Component, Input} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-speaker-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './speaker-card.component.html',
  styleUrl: './speaker-card.component.scss'
})
export class SpeakerCardComponent {
  @Input() name?: string;
  @Input() position?: string;
  @Input() description?: string;
  @Input() imageUrl?: string;
  @Input() instagramUrl?: string;
  @Input() telegramUrl?: string;
  @Input() linkedinUrl?: string;
  @Input() lectureTitle?: string;

  isFlipped: boolean = false;

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }


}
