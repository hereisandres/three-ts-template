import { BaseScene } from './BaseScene'
import * as THREE from 'three'

export default class CubeScene extends BaseScene {
    public start() {
        this.camera.position.z = 3
        this.add(this.camera)

        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
        const mesh = new THREE.Mesh(geometry, material)
        this.add(mesh)
    }

    public update() {

    }
}
