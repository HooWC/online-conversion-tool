import * as sass from 'sass';

/**
 * 将 CSS 转换为 Sass 格式
 * @param {string} css - 输入的 CSS 字符串
 * @returns {string} - 返回转换后的 Sass 字符串
 */
export function cssToSass(css) {
    try {
        const result = sass.compileString(css, {
            style: 'expanded', // 这里使用 expanded 风格，便于格式化输出
        });
        return result.css; // 返回 Sass 格式的结果
    } catch (error) {
        console.error("CSS 转 Sass 失败: ", error);
        return '';
    }
}