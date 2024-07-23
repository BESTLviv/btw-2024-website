import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  imports: [],
  templateUrl: './scroll-progress.component.html',
  styleUrl: './scroll-progress.component.scss'
})
export class ScrollProgressComponent implements OnInit {
  scrollProgress = 0;

  ngOnInit() {
    this.updateScrollProgress();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.updateScrollProgress();
  }

  updateScrollProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollProgress = (scrollTop / scrollHeight) * 100;
  }
}
