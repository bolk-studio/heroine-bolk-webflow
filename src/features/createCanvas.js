import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as THREE from 'three'
gsap.registerPlugin(ScrollTrigger)

function createCanvas() {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

  const renderer = new THREE.WebGLRenderer()
  const badge = document.createElement('div')
  renderer.setSize(window.innerWidth, window.innerHeight)
  badge.appendChild(renderer.domElement)
  badge.classList.add('canvas-container')
  document.body.appendChild(badge)

  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  const ambientLight = new THREE.AmbientLight(0x000000)
  scene.add(ambientLight)

  const light1 = new THREE.PointLight(0xffffff, 1, 0)
  light1.position.set(0, 200, 0)
  scene.add(light1)

  const light2 = new THREE.PointLight(0xffffff, 1, 0)
  light2.position.set(100, 200, 100)
  scene.add(light2)

  const light3 = new THREE.PointLight(0xffffff, 1, 0)
  light3.position.set(-100, -200, -100)
  scene.add(light3)

  camera.position.z = 5

  function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }

  animate()

  //trigger test

  gsap.to('.scroll__progress span', {
    width: '100%',
    ease: 'none',
    scrollTrigger: { scrub: 0.3 },
    onUpdate: function () {},
  })

  gsap.to(cube.rotation, {
    x: 3.14,
    y: 3.14,
    ease: 'none',
    scrollTrigger: { scrub: 0.3 },
    onUpdate: function () {},
  })
}

export default createCanvas
