<script setup>
  import * as THREE from 'three';
  import Stats from 'three/addons/libs/stats.module.js';
  import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
  import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
  import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
  import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

  // References for DOM elements
  const container = ref(null);

  // Variables for Three.js components
  let scene, camera, renderer, mixer, controls, stats, clock, animationLoop;

  onMounted(() => {
    initThreeJs();
  });

  onBeforeUnmount(() => {
    disposeThreeJs();
  });

  function initThreeJs() {
    // Initialize Three.js Clock
    clock = new THREE.Clock();

    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xbfe3dd);

    // Renderer setup
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth * 0.7, window.innerHeight); // 渲染器宽度占 80%
    container.value.appendChild(renderer.domElement);

    // Camera setup
    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100);
    camera.position.set(5, 2, 8);

    // PMREM Generator for environment lighting
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

    // Stats setup
    stats = new Stats();
    container.value.appendChild(stats.dom);

    // OrbitControls setup
    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.5, 0);
    controls.enablePan = false;
    controls.enableDamping = true;

    // Model loader with DRACO compression
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/'); // Adjust the path according to your assets
    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      '/models/LittlestTokyo.glb', // Adjust the path according to your assets
      gltf => {
        const model = gltf.scene;
        model.position.set(1, 1, 0);
        model.scale.set(0.01, 0.01, 0.01);
        scene.add(model);

        // Animation Mixer setup
        mixer = new THREE.AnimationMixer(model);
        mixer.clipAction(gltf.animations[0]).play();

        startAnimationLoop();
      },
      undefined,
      error => {
        console.error('Error loading model:', error);
      }
    );

    // Handle window resize
    window.addEventListener('resize', onWindowResize);
  }

  function disposeThreeJs() {
    // Stop the animation loop
    if (animationLoop) cancelAnimationFrame(animationLoop);

    // Dispose renderer
    if (renderer) {
      renderer.dispose();
    }

    // Remove event listeners
    window.removeEventListener('resize', onWindowResize);

    // Clean up memory
    scene = null;
    camera = null;
    renderer = null;
    controls = null;
    stats = null;
    mixer = null;
    clock = null;
  }

  function onWindowResize() {
    if (camera && renderer) {
      camera.aspect = (window.innerWidth * 0.7) / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth * 0.7, window.innerHeight);
    }
  }

  function startAnimationLoop() {
    const animate = () => {
      animationLoop = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);

      controls.update();
      stats.update();

      renderer.render(scene, camera);
    };

    animate();
  }

  const code1 = `
  // 创建一个新的 Three.js 场景。
  const scene = new THREE.Scene(); 
  // 设置背景颜色为浅蓝色
  scene.background = new THREE.Color(0xbfe3dd);`;

  const code2 = `
  // WebGLRenderer 用于在 HTML5 <canvas> 上渲染 3D 场景 参数 antialias: true 开启抗锯齿。
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  // 设置分辨率适配设备像素比（setPixelRatio），并设置渲染尺寸。
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);`;

  const code3 = `
  // PerspectiveCamera: 创建透视相机，提供远近感
  // 参数分别为视场角（FOV）、宽高比（aspect）、近裁剪面（near）、远裁剪面（far）。
  const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100);
  // 设置相机位置
  camera.position.set(5, 2, 8);`;

  const code4 = `
  // OrbitControls: 允许用户通过鼠标旋转、缩放和移动视角。
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0.5, 0);
  controls.update();
  // 禁用了平移（enablePan: false）并启用阻尼效果（enableDamping: true）。
  controls.enablePan = false;
  controls.enableDamping = true;`;

  const code5 = `
  // Model loader with DRACO compression
  // DRACOLoader: 用于解码压缩的 GLTF 数据，减少模型文件大小。
  const dracoLoader = new DRACOLoader();
  // setDecoderPath 设置解码器的目录
  dracoLoader.setDecoderPath("/draco/"); // Adjust the path according to your assets
  // GLTFLoader: 用于加载 GLTF/GLB 格式的 3D 模型文件。
  const loader = new GLTFLoader();
  loader.setDRACOLoader(dracoLoader);

  loader.load(
    "/models/LittlestTokyo.glb", // Adjust the path according to your assets
    (gltf) => {
      const model = gltf.scene;
      // 调整模型的位置和缩放。
      model.position.set(1, 1, 0);
      model.scale.set(0.01, 0.01, 0.01);
      scene.add(model);

      // Animation Mixer setup
      // 使用 AnimationMixer 播放模型自带的动画。
      mixer = new THREE.AnimationMixer(model);
      mixer.clipAction(gltf.animations[0]).play();

      // 启用渲染循环。
      startAnimationLoop();
    },
    undefined,
    (error) => {
      console.error("Error loading model:", error);
    }
  );`;

  const code6 = `
  // Clock: 计算时间增量（delta），用于更新动画。
  const clock = new THREE.Clock();
  function startAnimationLoop() {
    const animate = () => {
      animationLoop = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      // mixer.update(delta) 根据时间增量更新动画状态。
      if (mixer) mixer.update(delta);

      controls.update();
      stats.update();

      renderer.render(scene, camera);
    };

    animate();
  }`;

  const code7 = `
  // Stats: 用于显示性能指标（如帧率 FPS）。
  const stats = new Stats();
  container.appendChild(stats.dom);`;

  const code8 = `
  window.onresize = function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
  };`;

  // 获取 Nuxt 路由实例
  const router = useRouter();

  // 跳转到首页
  const goHome = () => {
    router.push('/'); // 使用 router.push('/') 跳转到首页
  };
</script>

<template>
  <div class="three-webgl">
    <div class="animation-container" ref="container"></div>
    <!-- 右侧代码说明 -->
    <ClientOnly>
      <div class="info-panel">
        <h1>代码说明</h1>
        <h3>1. 场景初始化</h3>
        <CodeHighlight :code="code1" type="typescript" />
        <h3>2. 渲染器设置</h3>
        <CodeHighlight :code="code2" type="typescript" />
        <h3>3. 摄像机设置</h3>
        <CodeHighlight :code="code3" type="typescript" />
        <h3>4. OrbitControls控制器</h3>
        <CodeHighlight :code="code4" type="typescript" />
        <h3>5. 模型加载</h3>
        <CodeHighlight :code="code5" type="typescript" />
        <h3>6. 动画系统</h3>
        <CodeHighlight :code="code6" type="typescript" />
        <h3>7. 性能监控</h3>
        <CodeHighlight :code="code7" type="typescript" />
        <h3>7. 窗口调整</h3>
        <CodeHighlight :code="code8" type="typescript" />
      </div>
    </ClientOnly>
  </div>
</template>

<style scoped>
  /* Basic styles for the container */
  body {
    background-color: #bfe3dd;
    color: #000;
  }

  a {
    color: #2983ff;
  }
  .three-webgl {
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  .animation-container {
    width: 70vw;
    height: 100vh;
    position: relative;
    flex: 1;
  }
  .info-panel {
    width: 30vw;
    height: 100vh;
    padding: 20px;
    background: #fff;
    color: #000;
    overflow-y: auto;
    text-align: left;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  }
  .info-panel h2 {
    margin-top: 0;
  }

  .info-panel ul,
  .info-panel ol {
    margin: 0;
    padding: 0 0 0 20px;
  }
</style>
