import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-image',
  standalone: true,
  imports: [],
  templateUrl: './scroll-image.component.html',
  styleUrl: './scroll-image.component.scss'
})
export class ScrollImageComponent implements OnInit, OnDestroy {
  imageSrc = 'path/to/your/image.jpg';
  private scrollPosition = 0;
  private readonly scrollSpeed = 0.5; // Швидкість руху зображення

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const newScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDelta = newScrollPosition - this.scrollPosition;
    this.updateImagePosition(scrollDelta);
    this.scrollPosition = newScrollPosition;
  }

  ngOnInit() {
    this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  }

  ngOnDestroy() {
    // Очистка, якщо потрібно
  }

  private updateImagePosition(scrollDelta: number) {
    const image = document.querySelector('.scroll-image') as HTMLElement;
    if (image) {
      const currentLeft = parseFloat(image.style.left) || 0;
      const newLeft = currentLeft - scrollDelta * this.scrollSpeed;
      image.style.left = `${newLeft}px`;
    }
  }
}
