import {Component,HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  imports: [],
  templateUrl: './custom-cursor.component.html',
  styleUrl: './custom-cursor.component.scss'
})
export class CustomCursorComponent implements OnInit {
  private mouseX = 0;
  private mouseY = 0;
  private cursorX = 0;
  private cursorY = 0;
  private angle = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }

  ngOnInit() {
    this.updateCursorPosition();
  }

  private updateCursorPosition() {
    // Плавне слідування за курсором
    this.cursorX += (this.mouseX - this.cursorX) * 0.2;
    this.cursorY += (this.mouseY - this.cursorY) * 0.2;

    // Обчислення кута
    const dx = this.mouseX - this.cursorX;
    const dy = this.mouseY - this.cursorY;
    const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI);

    // Плавне обертання
    this.angle += ((targetAngle - this.angle + 540) % 360 - 180) * 0.2;

    requestAnimationFrame(() => this.updateCursorPosition());
  }

  getCursorStyle(): string {
    return `translate(${this.cursorX}px, ${this.cursorY}px) rotate(${this.angle}deg)`;
  }
}
