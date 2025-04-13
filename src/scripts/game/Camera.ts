import * as THREE from 'three';

export class Camera {
    private camera: THREE.PerspectiveCamera;

    constructor(aspectRatio: number) {
        this.camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
        this.camera.position.z = 10;
    }

    public getCamera(): THREE.PerspectiveCamera {
        return this.camera;
    }

    public onResize(aspectRatio: number): void {
        this.camera.aspect = aspectRatio;
        this.camera.updateProjectionMatrix();
    }
}