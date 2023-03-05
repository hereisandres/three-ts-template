import './style.css'
import * as settings from './settings'
import * as THREE from 'three'
import CubeScene from './scenes/CubeScene'

const renderer = new THREE.WebGLRenderer({
    canvas: settings.canvas.element,
    antialias: true
})
renderer.setSize(settings.canvas.width, settings.canvas.height)

const mainCamera = new THREE.PerspectiveCamera(
    settings.mainCamera.fov, 
    settings.mainCamera.aspect(), 
    settings.mainCamera.near, 
    settings.mainCamera.far
)
mainCamera.position.z = 3

// Template Scene
const scene = new CubeScene(mainCamera)
scene.start()

// Main Loop
const tick = () => {
    scene.update()
    renderer.render(scene, mainCamera)
    requestAnimationFrame(tick)
}
tick()

// Resize logic
window.addEventListener('resize', () => {
    // Update canvas size
    settings.canvas.width = window.innerWidth
    settings.canvas.height = window.innerHeight

    // Update camera and renderer
    mainCamera.aspect = settings.mainCamera.aspect()
    mainCamera.updateProjectionMatrix()
    renderer.setSize(settings.canvas.width, settings.canvas.height)
})
