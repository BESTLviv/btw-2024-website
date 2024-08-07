import { Component } from '@angular/core';
import {SpeakersSwiperComponent} from "../speakers-swiper/speakers-swiper.component";
import {TeamSwiperComponent} from "../team-swiper/team-swiper.component";

@Component({
  selector: 'app-team-section',
  standalone: true,
  imports: [
    SpeakersSwiperComponent,
    TeamSwiperComponent
  ],
  templateUrl: './team-section.component.html',
  styleUrl: './team-section.component.scss'
})
export class TeamSectionComponent {

}
