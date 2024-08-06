import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {PlanetComponent} from "../planet/planet.component";

@Component({
  selector: 'app-bot-section',
  standalone: true,
  imports: [
    NgOptimizedImage,
    PlanetComponent
  ],
  templateUrl: './bot-section.component.html',
  styleUrl: './bot-section.component.scss'
})
export class BotSectionComponent {

}
