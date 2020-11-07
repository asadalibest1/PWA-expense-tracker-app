importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');


const firebaseConfig = {
  apiKey: "AIzaSyDH5x8oakx0oN_KUg6tOlY6hMYBr5XfQEg",
  authDomain: "react-typescriptpwa-quizapp.firebaseapp.com",
  databaseURL: "https://react-typescriptpwa-quizapp.firebaseio.com",
  projectId: "react-typescriptpwa-quizapp",
  storageBucket: "react-typescriptpwa-quizapp.appspot.com",
  messagingSenderId: "148178044608",
  appId: "1:148178044608:web:190c643cf01d14ec3bcf25"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();
