import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {CursorTrailComponent} from "./components/cursor-trail/cursor-trail.component";
import {FooterComponent} from "./components/footer/footer.component";
import {Marquee1Component} from "./components/marquee1/marquee1.component";
import {Marquee2Component} from "./components/marquee2/marquee2.component";
import {BotSectionComponent} from "./components/bot-section/bot-section.component";
import {SpeakersSectionComponent} from "./components/speakers-section/speakers-section.component";
import {HeroSectionComponent} from "./components/hero-section/hero-section.component";
import {TeamSectionComponent} from "./components/team-section/team-section.component";
import {StarBackgroundFixedComponent} from "./components/star-background-fixed/star-background-fixed.component";
import {PhotosSectionComponent} from "./components/photos-section/photos-section.component";
import {OrganizationSectionComponent} from "./components/organization-section/organization-section.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CursorTrailComponent,
    StarBackgroundFixedComponent,
    HeaderComponent,
    HeroSectionComponent,
    Marquee1Component,
    BotSectionComponent,
    Marquee2Component,
    SpeakersSectionComponent,
    OrganizationSectionComponent,
    TeamSectionComponent,
    PhotosSectionComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
