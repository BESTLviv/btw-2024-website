import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-bot-section',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './bot-section.component.html',
  styleUrl: './bot-section.component.scss'
})
export class BotSectionComponent {

}
