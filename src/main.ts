import './style.css'
import * as settings from  './settings'
import * as THREE from 'three'

const renderer = new THREE.WebGLRenderer({
  canvas: settings.canvas.element
})
renderer.setSize(settings.canvas.width, settings.canvas.height)

const mainCamera = new THREE.PerspectiveCamera(settings.mainCamera.fov, settings.mainCamera.aspect, settings.mainCamera.near, settings.mainCamera.far)
mainCamera.position.z = 3

// Template Scene
const scene = new THREE.Scene()
 
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

mainCamera.position.z = 3
scene.add(mainCamera)

// Main Loop
const tick = () =>
{
  renderer.render(scene, mainCamera)
  requestAnimationFrame(tick)
}
tick()
