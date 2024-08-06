import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {SomecComponent} from "./components/somec/somec.component";
import {ScrollProgressComponent} from "./components/scroll-progress/scroll-progress.component";
import {ScrollToTopComponent} from "./components/scroll-to-top/scroll-to-top.component";
import {StarBackgroundComponent} from "./components/star-background/star-background.component";
import {HeroComponent} from "./components/hero/hero.component";
import {Somec2Component} from "./components/somec2/somec2.component";
import {CursorTrailComponent} from "./components/cursor-trail/cursor-trail.component";
import {FooterComponent} from "./components/footer/footer.component";
import {TeamSwiperComponent} from "./components/team-swiper/team-swiper.component";
import {TestSwiperComponent} from "./components/test-swiper/test-swiper.component";
import {SpeakersSwiperComponent} from "./components/speakers-swiper/speakers-swiper.component";
import {SpeakerCardComponent} from "./components/speaker-card/speaker-card.component";
import {TimerComponent} from "./components/timer/timer.component";
import {Marquee1Component} from "./components/marquee1/marquee1.component";
import {Marquee2Component} from "./components/marquee2/marquee2.component";
import {BotSectionComponent} from "./components/bot-section/bot-section.component";
import {SpeakersSectionComponent} from "./components/speakers-section/speakers-section.component";
import {HeroSectionComponent} from "./components/hero-section/hero-section.component";
import {PlanetComponent} from "./components/planet/planet.component";
import {TeamSectionComponent} from "./components/team-section/team-section.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    SomecComponent,
    ScrollProgressComponent,
    ScrollToTopComponent,
    StarBackgroundComponent,
    HeroComponent,
    Somec2Component,
    CursorTrailComponent,
    FooterComponent,
    TeamSwiperComponent,
    TestSwiperComponent,
    SpeakersSwiperComponent,
    SpeakerCardComponent,
    TimerComponent,
    Marquee1Component,
    Marquee2Component,
    BotSectionComponent, SpeakersSectionComponent, HeroSectionComponent, PlanetComponent, TeamSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
