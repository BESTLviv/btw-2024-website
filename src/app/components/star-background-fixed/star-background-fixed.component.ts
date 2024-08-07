import {AfterViewInit, Component, ElementRef, HostListener, OnDestroy, ViewChild} from '@angular/core';
import * as THREE from "three";
import {random} from "maath";

@Component({
  selector: 'app-star-background-fixed',
  standalone: true,
  imports: [],
  templateUrl: './star-background-fixed.component.html',
  styleUrl: './star-background-fixed.component.scss'
})
export class StarBackgroundFixedComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef;
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private points!: THREE.Points;

  ngAfterViewInit() {
    this.initThree();
    window.addEventListener('resize', this.onWindowResize);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  private initThree() {
    const canvas = this.canvasRef.nativeElement;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x080808);
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 1;

    this.renderer = new THREE.WebGLRenderer({ canvas });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.BufferGeometry();
    const positions = random.inSphere(new Float32Array(5000), { radius: 1.2 });
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.002, sizeAttenuation: true });
    this.points = new THREE.Points(geometry, material);
    this.scene.add(this.points);

    this.points.rotation.set(0, 0, Math.PI / 4);

    this.animate();
  }

  private animate = () => {
    requestAnimationFrame(this.animate);

    this.points.rotation.x -= 0.001;
    this.points.rotation.y -= 0.00067;

    this.renderer.render(this.scene, this.camera);
  };

  @HostListener('window:resize', [])
  onWindowResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  };
}
