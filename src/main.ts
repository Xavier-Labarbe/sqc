import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBXtS6a2NonAAEJomRATDEyZBIdZcl3Rnc",
    authDomain: "sqc-xl.firebaseapp.com",
    projectId: "sqc-xl",
    storageBucket: "sqc-xl.appspot.com",
    messagingSenderId: "612363268420",
    appId: "1:612363268420:web:f059d7328f0c4502bb2711"
};

initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')
