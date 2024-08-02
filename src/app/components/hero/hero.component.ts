import { Component } from '@angular/core';
import {StarBackgroundComponent} from "../star-background/star-background.component";

@Component({
  selector: 'app-hero',
  standalone: true,
    imports: [
        StarBackgroundComponent
    ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
