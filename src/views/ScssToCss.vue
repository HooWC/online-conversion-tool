<template>
    <div class="scss-to-css">
        <h1>Scss to CSS</h1>
        <textarea v-model="scssCode" placeholder="Type Scss code..." rows="10"></textarea>
        <button @click="convertscssToCss">Convert to CSS</button>
        <div v-if="cssCode">
            <h2>Generated CSS code:</h2>
            <pre>{{ cssCode }}</pre>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import * as sass from 'sass';

// 输入的 scss 代码
const scssCode = ref('');

// 输出的 CSS 代码
const cssCode = ref('');

// 转换 scss 到 CSS
const convertscssToCss = () => {
    try {
        // 使用 scss.compileString 来将 scss 编译为 CSS
        const result = sass.compileString(scssCode.value);  // 处理 scss 编译
        cssCode.value = result.css;  // 获取生成的 CSS
    } catch (error) {
        // 如果发生错误，显示错误消息
        cssCode.value = `错误: ${error.message}`;
    }
};
</script>

<style scoped>

.scss-to-css {
    margin: 20px;
    font-family: Arial, sans-serif;
}

/* 标题样式 */
h1 {
    text-align: center;
    color: #3498db;
    margin-bottom: 20px;
    font-size: 2rem;
}

/* 输入框样式 */
textarea {
    width: 100%;
    padding: 12px;
    font-family: monospace;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    resize: vertical;
}

/* 当输入框获得焦点时的样式 */
textarea:focus {
    border-color: #3498db;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(52, 152, 219, 0.5);
    outline: none;
}

button {
    background-color: #3498db;
    color: white;
    padding: 12px 20px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    border-radius: 5px;
    margin-top: 15px;
    width: 100%;
}

/* 按钮悬浮效果 */
button:hover {
    background-color: #2980b9;
    transform: scale(1.05);
}

/* 按钮点击效果 */
button:active {
    background-color: #1f618d;
    transform: scale(0.98);
}

/* 生成 CSS 代码显示区域 */
pre {
    background-color: #f4f4f4;
    color: #333;
    padding: 20px;
    border-radius: 5px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 14px;
    word-wrap: break-word;
    white-space: pre-wrap;
    margin-top: 20px;
    text-align: left;
    max-height: 400px;
    overflow-y: auto;
}

/* 响应式设计 */
@media (max-width: 600px) {
    h1 {
        font-size: 1.5rem;
    }

    textarea {
        font-size: 13px;
        padding: 10px;
    }

    button {
        font-size: 0.9rem;
        padding: 10px 20px;
    }

    pre {
        font-size: 12px;
        padding: 15px;
    }
}
</style>
