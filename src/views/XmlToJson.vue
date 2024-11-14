<template>
    <div class="xml-to-json">
        <h1>XML to JSON</h1>
        <textarea v-model="xmlData" placeholder="Type XML code..." rows="10"></textarea>
        <button @click="convertXmlToJson">Convert to JSON</button>
        <div v-if="jsonData">
            <h2>Generated JSON data:</h2>
            <pre>{{ jsonData }}</pre>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { XMLParser } from 'fast-xml-parser';

// XML 数据绑定
const xmlData = ref('');
// 存储转换后的 JSON 数据
const jsonData = ref('');

// 转换函数
// 转换函数
const convertXmlToJson = () => {
    try {
        const parser = new XMLParser({
            ignoreAttributes: false,    // 保留属性
            parseNodeValue: true,       // 保留节点值
            attributeNamePrefix: "",    // 去掉属性名前缀
            parseAttributeValue: false, // 不解析属性值
            // 不解析XML头部信息
            tagValueProcessor: (tagName, value) => {
                // 删除 ?xml 键和内容
                if (tagName === '?xml') return undefined;
                return value;
            }
        });

        // 转换 XML 为 JSON
        const jsonObj = parser.parse(xmlData.value);

        // 去掉结果中的 ?xml 字段
        if (jsonObj["?xml"]) {
            delete jsonObj["?xml"];
        }

        jsonData.value = JSON.stringify(jsonObj, null, 2);  // 格式化 JSON 输出
    } catch (error) {
        jsonData.value = `错误: ${error.message}`;
    }
};

</script>

<style scoped>
.xml-to-json {
    margin: 20px;
    font-family: Arial, sans-serif;
}

h1 {
    text-align: center;
    color: #3498db;
    margin-bottom: 20px;
    font-size: 2rem;
}

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

button:hover {
    background-color: #2980b9;
}

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

h2 {
    color: #333;
    margin-top: 20px;
    font-size: 1.5rem;
    text-align: center;
}
</style>
