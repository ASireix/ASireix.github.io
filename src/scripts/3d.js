import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GUI } from 'dat.GUI';
import modelsData from '/src/modelslist.json'

const placeHolderPath = "/Models_3D/placeholder.png";

$(document).ready(function () {

    for (let index = 0; index < modelsData.length; index++) {
        const element = modelsData[index];
        let modelPath = element.path;
        let image = element.image;
        if (image == "") {
            image = placeHolderPath;
        }
        
        let button = $('<button>')
            //.text("TEST")
            .attr({
                "type": "button",
                "id": "button-" + index,
                "class": "btn w-25 h-25"
            })
            .on('click', function () {
                LoadModel(modelPath);
            });
        let textTest = $('<img>')
            .attr({
                "src": placeHolderPath,
                "class":"rounded h-100"
            });
        button.append(textTest);
        $("#models-list")
            .append(button);

        if (index == 0) button.trigger("click");
        
    }
});

const scene = new THREE.Scene();
var container = document.getElementById("render-canvas");
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('render-canvas'), antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;

renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);

camera.position.set(4, 5, 7);
camera.lookAt(0, 0, 0);

//#region CAMERA CONTROLS
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = true;
controls.minDistance = 0;
controls.maxDistance = 200;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 3.5;
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 1, 0);
controls.update();

function ResetCam() {
    camera.position.set(4, 5, 7);
    camera.lookAt(0, 0, 0);
    controls.enableDamping = true;
    controls.enablePan = true;
    controls.minDistance = 0;
    controls.maxDistance = 200;
    controls.minPolarAngle = 0.5;
    controls.maxPolarAngle = 3.5;
    controls.autoRotate = false;
    controls.target = new THREE.Vector3(0, 1, 0);
    controls.update();
}
//#endregion

scene.background = new THREE.Color(0xdddddd);

//#region LIGHTING
// Ambient Light
const ambientLight = new THREE.AmbientLight(0x404040, 1.5); // Soft white light
scene.add(ambientLight);

// Directional Light
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7.5).normalize();
scene.add(directionalLight);

// Point Light
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(2, 3, 4);
scene.add(pointLight);
//#endregion

//#region GROUND PLANE
//GROUND PLANE
const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
groundGeometry.rotateX(-Math.PI / 2);
const groundMaterial = new THREE.MeshBasicMaterial({
    color: 0x555555,
    side: THREE.DoubleSide
});

const ground = new THREE.Mesh(groundGeometry, groundMaterial);
//scene.add(ground);
//#endregion

//#region GUI
//Create the GUI layout and append it to the container
const gui = new GUI({ autoPlace: false });
let guiContainer = document.getElementById("gui-container");
guiContainer.appendChild(gui.domElement);

let data = {
    label: "TEST",
    wireframe: false,
    verticeCount: 0,
    triangleCount: 0,
    reset: ResetCam
};

gui.add(data, 'wireframe').name('Toggle Wireframe').onChange(toggleWireframe);
gui.add(data, 'verticeCount').name("Vertice Count").listen();
gui.add(data, 'triangleCount').name("Triangle Count").listen();
gui.add(data, 'reset').name("Reset Camera");

function updateGUI() {
    data.verticeCount = vertexCount;
    data.triangleCount = triangleCount;
    gui.updateDisplay();
}

function calculateVerticesCount(model) {
    let count = 0;
    model.traverse((child) => {
        if (child.isMesh) {
            count += child.geometry.attributes.position.count;
        }
    });
    return count;
    gui.updateDisplay();
}

function calculateTrianglesCount(model) {
    let count = 0;
    model.traverse((child) => {
        if (child.isMesh) {
            if (child.geometry.index != null) {
                count += child.geometry.index.count / 3;
            } else {
                count += child.geometry.attributes.position.count / 3;
            }
        }
    });
    return count;
}

function toggleWireframe(value) {
    if (wireframeModel) {
        wireframeModel.visible = value;
        loadedModel.visible = !value;
    }
}
function createWireframeModel(model) {
    wireframeModel = new THREE.Group();

    model.traverse((child) => {
        if (child.isMesh) {
            const wireframeGeometry = new THREE.WireframeGeometry(child.geometry);
            const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0xe0a100 }); // green color
            const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
            wireframe.position.copy(child.position);
            wireframe.rotation.copy(child.rotation);
            wireframe.scale.copy(child.scale);
            wireframeModel.add(wireframe);
        }
    });

    // Apply the same transformations to the wireframe model
    wireframeModel.position.copy(model.position);
    wireframeModel.rotation.copy(model.rotation);
    wireframeModel.scale.copy(model.scale);

    wireframeModel.visible = data.wireframe;
    scene.add(wireframeModel);
}
//#endregion

const loader = new GLTFLoader();
let loadedModel, wireframeModel, vertexCount, triangleCount;

function LoadModel(path) {
    Unload(loadedModel);
    Unload(wireframeModel);
    loader.load(path, function (gltf) {
        let mesh = gltf.scene;
        mesh.position.set(0, 1, 0);
        loadedModel = mesh;
        scene.add(mesh);
        vertexCount = calculateVerticesCount(mesh);
        triangleCount = calculateTrianglesCount(mesh);
        mesh.traverse((child) => {
            if (child.isMesh) {
                child.material.transparent = true;
            }
        })
        createWireframeModel(mesh);
        camera.lookAt(loadedModel.position);
        loadedModel.visible = !data.wireframe;
        updateGUI();
    });
}

function Unload(target) {
    if (target == null) return;
    target.removeFromParent();
    target.traverse((child) => {
        // disposing materials
        if (child.material && !child.material._isDisposed) {
            // disposing textures
            for (const [key, value] of Object.entries(child.material)) {
                if (!value) continue;
                if (typeof value.dispose === "function" && !value._isDisposed) {
                    value.dispose();
                    value._isDisposed = true;
                    child[key] = null;
                }
            }
            child.material.dispose();
            child.material._isDisposed = true;
            child.material = null;
        }
        // disposing geometries
        if (child.geometry?.dispose && !child.geometry._isDisposed) {
            child.geometry.dispose();
            child.geometry._isDisposed = true;
            child.geometry = null;
        }
    });
}




function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();
    updateGUI();
}

animate();