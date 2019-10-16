import Vue from 'vue'
Vue.component("demo-1", () => import("D:\\me\\vue\\vuepress\\front-end-interview\\docs\\.vuepress\\components\\demo-1"))
Vue.component("OtherComponent", () => import("D:\\me\\vue\\vuepress\\front-end-interview\\docs\\.vuepress\\components\\OtherComponent"))
Vue.component("svg-container", () => import("D:\\me\\vue\\vuepress\\front-end-interview\\docs\\.vuepress\\components\\svg-container"))
Vue.component("UpgradePath", () => import("D:\\me\\vue\\vuepress\\front-end-interview\\docs\\.vuepress\\components\\UpgradePath"))
Vue.component("Foo-Bar", () => import("D:\\me\\vue\\vuepress\\front-end-interview\\docs\\.vuepress\\components\\Foo\\Bar"))
Vue.component("Badge", () => import("D:\\me\\vue\\vuepress\\front-end-interview\\node_modules\\_@vuepress_theme-default@1.2.0@@vuepress\\theme-default\\global-components\\Badge"))


export default {}