import { createRouter, createWebHistory } from 'vue-router';
import ScssToCss from '../views/ScssToCss.vue';
import XmlToJson from '../views/XmlToJson.vue';
import CssToScss from '../views/CssToScss.vue';

const routes = [
    {
        path: '/scss-to-css',
        name: 'ScssToCss',
        component: ScssToCss,
    },
    {
        path: '/xml-to-json',
        name: 'XmlToJson',
        component: XmlToJson,
    },
    {
        path: '/css-to-scss',
        name: 'CssToScss',
        component: CssToScss,
    },
    {
        path: '/',
        redirect: '/scss-to-css', // 默认跳转到 Scss 转换
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
