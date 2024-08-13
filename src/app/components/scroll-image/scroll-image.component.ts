import {Component, OnInit, OnDestroy, HostListener, ElementRef} from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-scroll-image',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './scroll-image.component.html',
  styleUrl: './scroll-image.component.scss'
})
export class ScrollImageComponent implements OnInit {
  position = 0; // Початкова позиція в процентах (0% - лівий край, 100% - правий край)
  private containerOffsetTop = 0;
  private containerHeight = 0;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.updateContainerDimensions();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.updatePosition();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateContainerDimensions();
  }

  updateContainerDimensions() {
    const container = this.el.nativeElement.querySelector('.container');
    this.containerOffsetTop = container.offsetTop;
    this.containerHeight = container.offsetHeight;
  }

  updatePosition() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const windowHeight = window.innerHeight;

    const startScroll = this.containerOffsetTop - windowHeight;
    const endScroll = this.containerOffsetTop + this.containerHeight;

    if (scrollTop >= startScroll && scrollTop <= endScroll) {
      const progress = (scrollTop - startScroll) / (endScroll - startScroll);
      this.position = progress * 100;
    } else if (scrollTop > endScroll) {
      this.position = 100;
    } else {
      this.position = 0;
    }
  }
}
