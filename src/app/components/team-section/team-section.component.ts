import { Component } from '@angular/core';
import {TeamSwiperComponent} from "../team-swiper/team-swiper.component";

@Component({
  selector: 'app-team-section',
  standalone: true,
  imports: [
    TeamSwiperComponent
  ],
  templateUrl: './team-section.component.html',
  styleUrl: './team-section.component.scss'
})
export class TeamSectionComponent {

}
