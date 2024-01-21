import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
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

const signupForm = document.querySelector(".signingform");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = signupForm.email.value;
  const password = signupForm.password.value;

  console.log("Form submitted. Email:", email, "Password:", password);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User registered:", user);
      signupForm.reset();
      //document.querySelector(".sign-up").style.display = "none";
      alert('You have successfully registered!');
      window.location.assign('ahome.html')
    })
    .catch((error) => {
      console.error("Firebase Error:", error.code, error.message);
      document.getElementById("email").innerHTML =
        "Error, please retry.";
      document.getElementById("password").innerHTML = "Error, please retry.";
    });
});