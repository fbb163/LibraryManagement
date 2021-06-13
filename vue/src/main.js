import {createApp} from 'vue'
import App from './App.vue'

import router from './router'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import axios from '@/axios/http'
import VueAxios from 'vue-axios'

import store from './store'

createApp(App).use(router).use(store).use(ElementPlus).use(VueAxios, axios).mount('#app')
