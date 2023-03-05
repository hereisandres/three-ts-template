import * as THREE from 'three'

export abstract class BaseScene extends THREE.Scene {
    protected readonly camera: THREE.PerspectiveCamera

    constructor(camera: THREE.PerspectiveCamera) {
        super()

        this.camera = camera
    }

    public abstract start(): void
    public abstract update(): void
}
