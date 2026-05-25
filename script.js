import * as THREE from "three";
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

gsap.registerPlugin(ScrollTrigger);

//criando  cenario
const cena = new THREE.Scene();

//criando camera
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

//criando renderizador
const renderizador = new THREE.WebGLRenderer({alpha: true});
renderizador.setSize(window.innerWidth, window.innerHeight);
document.querySelector(".abelha").appendChild(renderizador.domElement);

//iluminação
const luzAmbiente = new THREE.AmbientLight("white", .5);
const luzDirecional = new THREE.DirectionalLight("white", 3.5);
luzDirecional.position.x = -3;
luzDirecional.position.z = 3;
cena.add(luzAmbiente, luzDirecional);


// import bee
let abelha;
let mixer;
const loader = new GLTFLoader();
loader.load("assets/bee_minecraft.glb", (abelhaObjeto)=> {
    abelha = abelhaObjeto.scene;
    const abelhaAnimacao = abelhaObjeto.animations[0];

    //Mixer -> controlador de reproduçao
    mixer = new THREE.AnimationMixer(abelha);
    mixer.clipAction(abelhaAnimacao).play();


    cena.add(abelha);
    abelha.position.z = -14;
    abelha.position.x = 12;
    abelha.position.y = -5;
    abelha.rotation.y = 2.6;
    abelha.rotation.x = -0.5;

    rotacionar();
});

function rotacionar(){
    gsap.to(abelha.position, {
       x: -10,
       scrollTrigger: {
        start: "0%  0%",
        end:  "60% 90%",
        scrub: 3,
       }
    })
}


// animar
function animate(){
   if(mixer) mixer.update(0.01);
    requestAnimationFrame(animate);
    renderizador.render(cena, camera);
}

animate();