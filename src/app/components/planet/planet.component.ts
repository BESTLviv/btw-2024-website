import { Component, ElementRef, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import * as THREE from 'three';
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";



@Component({
  selector: 'app-planet',
  standalone: true,
  imports: [],
  templateUrl: './planet.component.html',
  styleUrl: './planet.component.scss'
})
export class PlanetComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true }) private canvasRef!: ElementRef<HTMLCanvasElement>;
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private planet!: THREE.Object3D;
  private animationId!: number;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.initThreeJS();
    this.loadModel();
    this.animate();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
    this.renderer.dispose();
  }

  private initThreeJS(): void {
    // Створення сцени
    this.scene = new THREE.Scene();

    // Отримання розмірів канвасу
    const canvas = this.canvasRef.nativeElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    // Створення камери
    const fov = 75;
    const aspect = width / height;
    const near = 0.1;
    const far = 1000;
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this.camera.position.z = 5;

    // Створення рендерера
    this.renderer = new THREE.WebGLRenderer({ canvas: canvas });
    this.renderer.setSize(width, height);
  }

  private loadModel(): void {
    const loader = new GLTFLoader();
    loader.load('purple_planet.glb', (gltf) => {
      this.planet = gltf.scene;
      this.scene.add(this.planet);
    }, undefined, (error) => {
      console.error('An error happened', error);
    });
  }

  private animate(): void {
    this.animationId = requestAnimationFrame(() => this.animate());
    if (this.planet) {
      this.planet.rotation.y += 0.01; // Анімація обертання
    }
    this.renderer.render(this.scene, this.camera);
  }
}
