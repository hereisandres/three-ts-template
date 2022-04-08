// Canvas
export const canvas = {
  element: document.getElementById('app') as HTMLCanvasElement,
  width: 800,
  height: 600
}

// Camera
export const mainCamera = {
  fov: 75,
  aspect: canvas.width / canvas.height,
  near: 1,
  far:  1000
}
