import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';

export class Controls {
    private controls: OrbitControls;

    constructor(camera: THREE.PerspectiveCamera, domElement: HTMLCanvasElement) {
        this.controls = new OrbitControls(camera, domElement);

        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.25;
        this.controls.enableZoom = true;
    }

    public update(): void {
        this.controls.update();
    }
}