import * as THREE from 'three';

export class Renderer {
    private renderer: THREE.WebGLRenderer;

    constructor() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
    }

    public getDomElement(): HTMLCanvasElement {
        return this.renderer.domElement;
    }

    public render(scene: THREE.Scene, camera: THREE.PerspectiveCamera): void {
        this.renderer.render(scene, camera);
    }

    public onResize(width: number, height: number): void {
        this.renderer.setSize(width, height);
    }
}