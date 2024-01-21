import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

import {
    getAuth,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC8GTIm9h2FZ5IT0f_NcsslCyuJ6RL6nkI",
    authDomain: "authentication-dae4c.firebaseapp.com",
    databaseURL: "https://authentication-dae4c-default-rtdb.firebaseio.com",
    projectId: "authentication-dae4c",
    storageBucket: "authentication-dae4c.appspot.com",
    messagingSenderId: "872261147560",
    appId: "1:872261147560:web:10d6b540bd38f6afd51b9d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginForm = document.querySelector(".loginform");

      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const emailElement = loginForm.querySelector('[name="email"]');
        const passlElement = loginForm.querySelector('[name="password"]');

        // Check if the elements are found
        if (emailElement && passlElement) {
          const email = emailElement.value;
          const password = passlElement.value;

          signInWithEmailAndPassword(auth, email, password)
            .then((cred) => {
              console.log("user logged in:", cred.user);
              //document.querySelector(".login-box").style.display = "none";
              alert('Successfully logged in!')
              window.location.assign('ahome.html')
            })
            .catch((error) => {
              emailElement.nextElementSibling.innerHTML = "error, RETRY: ";
              passlElement.nextElementSibling.innerHTML = "error, RETRY: ";
            });
        } else {
          console.error("Email or password element not found");
        }
      });