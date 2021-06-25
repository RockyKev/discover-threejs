import {
  BoxBufferGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "./../../node_modules/three/build/three.module.js";

// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

console.log("HERE WE GO!");

// PROCESS:
// https://discoverthreejs.com/book/first-steps/first-scene/
// Initial Setup
// Create the Scene
// Create the Camera
// Create a Visible Object
// Create the Renderer
// Render the Scene

/* 1 of 6: Initial Setup */
const sceneContainer = document.querySelector("#sceneContainer");

/* 2 of 6: Set up the scene  */
const scene = new Scene();
scene.background = new Color("yellow");

/* 3 of 6: Create the camera */
const fov = 35; // field of view
const aspect = sceneContainer.clientWidth / sceneContainer.clientHeight; // if wrong, scene will look stretch/blurred
const near = 0.1; // the near clipping plane. Defines small end of fustrum (point closest to camera)
const far = 100; // the far clipping plane. Defines large end of fustrum. (point furthest from camera)

const camera = new PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 0, 10);

/* 4 of 6: Create an object */

// create the geometry
const boxSize = {
  length: 2,
  width: 2,
  depth: 2,
};

const geometry = new BoxBufferGeometry(
  boxSize.length,
  boxSize.width,
  boxSize.depth
);

// create the material (default (white) basic material)
const material = new MeshBasicMaterial();

// create the mesh (geometry + material)
const cube = new Mesh(geometry, material);

// add it to the scene
scene.add(cube);
// scene.remove(cube);

/* 5 of 6: Create the camera  */
const renderer = new WebGLRenderer();

renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight)
renderer.setPixelRatio(window.devicePixelRatio);
sceneContainer.append(renderer.domElement);

// 6 of 6: render the scene
renderer.render(scene, camera);