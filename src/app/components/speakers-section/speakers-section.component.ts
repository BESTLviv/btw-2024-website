import { Component } from '@angular/core';
import {SpeakersSwiperComponent} from "../speakers-swiper/speakers-swiper.component";
import {StarBackgroundComponent} from "../star-background/star-background.component";

@Component({
  selector: 'app-speakers-section',
  standalone: true,
  imports: [
    SpeakersSwiperComponent,
    StarBackgroundComponent
  ],
  templateUrl: './speakers-section.component.html',
  styleUrl: './speakers-section.component.scss'
})
export class SpeakersSectionComponent {

}
