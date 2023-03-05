// Canvas
export const canvas = {
  element: document.getElementById('app') as HTMLCanvasElement,
  width: window.innerWidth,
  height: window.innerHeight,
  isFullWindowSize: true,
  allowFullscreen: true
}


// Camera
export const mainCamera = {
  fov: 75,
  aspect: () => { return canvas.width / canvas.height },
  near: 1,
  far:  1000
}
