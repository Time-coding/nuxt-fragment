<template>
  <div ref="container" class="canvas-container"></div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import * as THREE from 'three';
  import { World, Body, Box, Vec3 } from 'cannon-es';

  const container = ref(null);

  onMounted(() => {
    let scene, camera, renderer, world, cubeMesh, cubeBody, clock;

    // 初始化Three.js场景
    function initScene() {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xeeeeee);

      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(0, 5, 10);

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.value.appendChild(renderer.domElement);

      // 添加灯光
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(5, 10, 7.5);
      scene.add(directionalLight);

      clock = new THREE.Clock();
    }

    // 初始化Cannon.js物理世界
    function initPhysics() {
      world = new World();
      world.gravity.set(0, -9.82, 0);

      // 创建地面
      const groundBody = new Body({
        type: Body.STATIC,
        shape: new Box(new Vec3(5, 0.1, 5))
      });
      groundBody.position.set(0, -0.1, 0);
      world.addBody(groundBody);

      const groundGeometry = new THREE.BoxGeometry(10, 0.2, 10);
      const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x00aa00 });
      const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
      groundMesh.position.copy(groundBody.position);
      scene.add(groundMesh);

      // 创建下落立方体
      createCube();
    }

    // 创建立方体并添加到物理世界和Three.js场景中
    function createCube() {
      const cubeSize = 1;

      // 删除旧的立方体
      if (cubeBody) world.removeBody(cubeBody);
      if (cubeMesh) scene.remove(cubeMesh);

      cubeBody = new Body({
        mass: 1, // 动态物体需要非零质量
        shape: new Box(new Vec3(cubeSize / 2, cubeSize / 2, cubeSize / 2))
      });
      cubeBody.position.set(0, 5, 0); // 重置位置
      cubeBody.velocity.set(0, 0, 0); // 重置速度
      cubeBody.angularVelocity.set(0, 0, 0); // 重置旋转速度
      world.addBody(cubeBody);

      const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
      const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff });
      cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
      scene.add(cubeMesh);
    }

    // 渲染循环
    function animate() {
      requestAnimationFrame(animate);

      // 更新物理世界
      const delta = clock.getDelta();
      world.step(1 / 60, delta, 3);

      // 同步Three.js物体位置
      cubeMesh.position.copy(cubeBody.position);
      cubeMesh.quaternion.copy(cubeBody.quaternion);

      renderer.render(scene, camera);
    }

    // 初始化
    initScene();
    initPhysics();
    animate();

    // 添加鼠标点击事件
    window.addEventListener('click', createCube);

    // 监听窗口大小变化
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // 清理事件监听器
    onUnmounted(() => {
      window.removeEventListener('click', createCube);
      window.removeEventListener('resize', () => {});
    });
  });
</script>

<style scoped>
  .canvas-container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
</style>
