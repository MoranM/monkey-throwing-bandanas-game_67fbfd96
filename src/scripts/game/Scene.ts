import * as THREE from 'three';

export class Scene {
    private scene: THREE.Scene;

    constructor() {
        this.scene = new THREE.Scene();

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 7.5);
        this.scene.add(directionalLight);
    }

    public getScene(): THREE.Scene {
        return this.scene;
    }
}