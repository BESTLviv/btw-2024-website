import {Component, Input} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-speaker',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './speaker.component.html',
  styleUrl: './speaker.component.scss'
})
export class SpeakerComponent {
  @Input() name?: string;
  @Input() position?: string;
  @Input() description?: string;
  @Input() imageUrl?: string;
  @Input() instagramUrl?: string;
  @Input() telegramUrl?: string;
  @Input() linkedinUrl?: string;
}
