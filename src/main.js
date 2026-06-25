
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// ✅ Import FontAwesome (fixes the icon issue you had)
import '@fortawesome/fontawesome-free/css/all.min.css';

const app = createApp(App);
app.use(router);
app.mount('#app');