import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VuePaperDashboard from 'vue-paper-dashboard';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASD1vAk2JBATDAADU3Jclh-K5ZEAmNfeY",
    authDomain: "flotillapp-ca83d.firebaseapp.com",
    projectId: "flotillapp-ca83d",
    storageBucket: "flotillapp-ca83d.appspot.com",
    messagingSenderId: "330917535571",
    appId: "1:330917535571:web:bc18e4edf475966b260ba6",
    measurementId: "G-3TQKLDHVN9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Attach Firebase and Firestore to Vue instance
Vue.prototype.$firebase = firebase;
Vue.prototype.$db = db;

Vue.config.productionTip = false;
Vue.use(VuePaperDashboard);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
