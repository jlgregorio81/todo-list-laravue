import { createApp } from 'vue';

import Home from './components/Home.vue';

const app = createApp({
    components : [Home]
});

//app.component('Home', Home);

app.mount('#app');

require('./bootstrap');
