import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList, NgZone, OnDestroy } from '@angular/core';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-cursor-trail',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './cursor-trail.component.html',
  styleUrl: './cursor-trail.component.scss'
})
export class CursorTrailComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren('circle') circles!: QueryList<ElementRef>;
  coords = {x: 0, y: 0};
  colors = [
    "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e", "#ec805d", "#e36e5c", "#df685c",
    "#d5585c", "#d1525c", "#c5415d", "#c03b5d", "#b22c5e", "#ac265e", "#9c155f", "#950f5f",
    "#830060", "#7c0060", "#680060", "#60005f", "#48005f", "#3d005e"
  ];
  isVisible = false;
  hideTimeout: any;
  animationFrameId: number | null = null;
  isTouching = false;

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    if (!('ontouchstart' in window)) {
      window.addEventListener('mousemove', this.handleMouseMove.bind(this));
    }
  }

  ngAfterViewInit(): void {
    this.initializeCircles();
  }

  ngOnDestroy(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
    }
    // Видалення обробників подій
    if ('ontouchstart' in window) {
      window.removeEventListener('touchmove', this.handleTouchMove.bind(this));
      window.removeEventListener('touchstart', this.handleTouchStart.bind(this));
      window.removeEventListener('touchend', this.handleTouchEnd.bind(this));
    } else {
      window.removeEventListener('mousemove', this.handleMouseMove.bind(this));
    }
  }

  initializeCircles(): void {
    this.circles.forEach((circle, index) => {
      const el = circle.nativeElement;
      el.x = 0;
      el.y = 0;
      el.style.backgroundColor = this.colors[index % this.colors.length];
      el.classList.remove('visible');
    });
  }

  handleMouseMove(e: MouseEvent): void {
    this.updateCoords(e.clientX, e.clientY);
  }

  handleTouchMove(e: TouchEvent): void {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      this.updateCoords(touch.clientX, touch.clientY);
    }
  }

  handleTouchStart(e: TouchEvent): void {
    this.isTouching = true;
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      this.updateCoords(touch.clientX, touch.clientY);
    }
    this.showElement();
  }

  handleTouchEnd(): void {
    this.isTouching = false;
    this.resetHideTimeout();
  }

  updateCoords(x: number, y: number): void {
    this.coords.x = x;
    this.coords.y = y;
    this.showElement();
    this.resetHideTimeout();
    if (this.animationFrameId === null) {
      this.animateCircles();
    }
  }

  showElement(): void {
    this.isVisible = true;
    this.updateVisibility();
  }

  hideElement(): void {
    this.isVisible = false;
    this.updateVisibility();
  }

  resetHideTimeout(): void {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
    }
    this.hideTimeout = setTimeout(() => {
      this.ngZone.run(() => {
        if (!this.isTouching) {
          this.hideElement();
        }
      });
    }, 1000);
  }

  updateVisibility(): void {
    this.circles.forEach(circle => {
      const el = circle.nativeElement;
      if (this.isVisible) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  }

  animateCircles(): void {
    let x = this.coords.x;
    let y = this.coords.y;

    this.circles.forEach((circle, index) => {
      const el = circle.nativeElement;
      el.style.left = x - 12 + 'px';
      el.style.top = y - 12 + 'px';
      el.style.scale = (this.circles.length - index) / this.circles.length;
      el.x = x;
      el.y = y;

      const nextCircle = this.circles.get(index + 1)?.nativeElement || this.circles.first.nativeElement;
      x += (nextCircle.x - el.x) * 0.35;
      y += (nextCircle.y - el.y) * 0.35;
    });

    this.animationFrameId = requestAnimationFrame(() => this.animateCircles());
  }
}
