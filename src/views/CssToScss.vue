<template>
    <div class="css-to-scss">
        <h1>CSS to SCSS</h1>
        <textarea v-model="cssCode" placeholder="Type CSS code..." rows="10"></textarea>
        <button @click="convertCssToScss">Convert to SCSS</button>
        <div v-if="scssCode">
            <h2>Generated SCSS code:</h2>
            <pre>{{ scssCode }}</pre>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const cssCode = ref(''); // 输入的 CSS 代码
const scssCode = ref(''); // 输出的 SCSS 代码

// 转换 CSS 到 SCSS
const convertCssToScss = () => {
    // 使用正则或简单的字符串操作，将 CSS 转换为 SCSS 格式
    let result = cssCode.value;

    // 确保每个属性都正确结束
    result = result.replace(/:([^;\n]+)\s*;/g, ': $1;');

    // 根据需求，你可以增加更多的转换逻辑
    // 比如嵌套的CSS规则转化为SCSS嵌套
    result = result.replace(/([a-z0-9-]+) {/g, '& .$1 {');

    // 将转换结果赋值
    scssCode.value = result;
};
</script>

<style scoped>

.css-to-scss {
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

/* 生成 SCSS 代码显示区域 */
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
