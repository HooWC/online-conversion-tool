<template>
  <div id="app">
    <div class="container">
      <h1 class="title">Online conversion tool</h1>
      <ConversionSelector />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ConversionSelector from './components/ConversionSelector.vue';

export default {
  name: 'App',
  components: {
    ConversionSelector,
  }
};
</script>

<style scoped>
/* 全局背景颜色 */


#app {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Arial', sans-serif;
  padding: 20px;
}

/* 容器样式 */
.container {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 900px;
  margin: 20px;
  text-align: center;
}

/* 标题样式 */
.title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: #3498db;
  /* 默认文本颜色 */
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: linear-gradient(45deg, #3498db, #9b59b6);
  -webkit-background-clip: text;
  /* 背景色应用到文本 */
  color: transparent;
  padding: 10px 20px;
  border-radius: 5px;
  position: relative;
  /* 确保伪元素的位置正确 */
  overflow: hidden;
  /* 确保伪元素不会溢出 */
  transition: all 0.3s ease;
  user-select: none;
}

/* 响应式设计：使其在移动端设备上更好地显示 */
@media (max-width: 600px) {
  .title {
    font-size: 1.5rem;
  }

  .container {
    width: 90%;
    padding: 15px;
  }
}
</style>
