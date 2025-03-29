// Three.js Tech Grid Background
class ThreeBackground {
  constructor() {
    this.init();
    this.animate();
  }

  init() {
    // Scene setup
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.prepend(this.renderer.domElement);

    // Tech grid geometry
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x00f7ff,
      wireframe: true,
      transparent: true,
      opacity: 0.7
    });

    this.cubes = [];
    const gridSize = 8;
    const spacing = 2.5;

    for(let x = -gridSize; x <= gridSize; x+=spacing) {
      for(let z = -gridSize; z <= gridSize; z+=spacing) {
        const cube = new THREE.Mesh(geometry, material.clone());
        cube.position.set(x, 0, z);
        cube.userData = {
          originalX: x,
          originalZ: z,
          speed: Math.random() * 0.02 + 0.01
        };
        this.scene.add(cube);
        this.cubes.push(cube);
      }
    }

    this.camera.position.z = 15;
    this.setupEvents();
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    
    this.cubes.forEach(cube => {
      cube.rotation.x += cube.userData.speed;
      cube.rotation.y += cube.userData.speed * 0.7;
      cube.position.y = Math.sin(Date.now() * 0.001 + cube.userData.originalX) * 0.5;
    });

    this.renderer.render(this.scene, this.camera);
  }

  setupEvents() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Mouse move interaction
    document.addEventListener('mousemove', (e) => {
      if(this.cubes.length > 0) {
        const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
        
        this.cubes.forEach(cube => {
          const distX = Math.abs(cube.position.x - mouseX * 10);
          const distY = Math.abs(cube.position.z - mouseY * 10);
          const dist = Math.sqrt(distX * distX + distY * distY);
          const scale = Math.max(0.5, 1.5 - dist * 0.1);
          cube.scale.set(scale, scale, scale);
        });
      }
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  if(document.querySelector('.three-bg-container')) {
    new ThreeBackground();
  }
});