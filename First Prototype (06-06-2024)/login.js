// Firebase modules for app initialization / authentication
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";
import { saveUserData } from "./firebase.js"

// Firebase configuration (API keys and identifiers)
const firebaseConfig = {
    apiKey: "AIzaSyDzjvMuATSARkGN1GTdJYCJ5ENpVZ9S0wY",
        authDomain: "tcgenius-beeb9.firebaseapp.com",
        databaseURL: "https://tcgenius-beeb9-default-rtdb.firebaseio.com",
        projectId: "tcgenius-beeb9",
        storageBucket: "tcgenius-beeb9.appspot.com",
        messagingSenderId: "498344412025",
        appId: "1:498344412025:web:61e52b46a0f2c0a2f665a8",
        measurementId: "G-F1F30GC0F8"
};

const app = initializeApp(firebaseConfig); // Initializes Firebase app
const auth = getAuth(app); // Firebase Authentication 

// Retrieves references to HTML elements
document.addEventListener('DOMContentLoaded', function() {
    const loginContainer = document.getElementById('login-container');
    const signupContainer = document.getElementById('signup-container');
    const switchToSignupButton = document.getElementById('switch-to-signup');
    const switchToLoginButton = document.getElementById('switch-to-login');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    // Event listener to switch to the Sign Up form
    switchToSignupButton.addEventListener('click', function() {
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'block';
    });

    // Event listener to switch to the Login form
    switchToLoginButton.addEventListener('click', function() {
        signupContainer.style.display = 'none';
        loginContainer.style.display = 'block';
    });

    // Event listener for the Login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                
                // successfull user sign in
                const user = userCredential.user
                if (user.emailVerified) {
                    window.location.href = 'main.html';
                } else {
                    alert('Please verify your email address before logging in.');
                }
            })
            .catch((error) => {
                // login error handling
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    });
    // Event listener for sign up form submission
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;
        const favoriteTCG = document.getElementById('signup-favorite-tcg').value;
        const memberSince = new Date().toISOString();
    
        if (password !== confirmPassword) {
            document.getElementById('signup-error').textContent = 'Passwords do not match';
            document.getElementById('signup-error').style.display = 'block';
            return;
        }
    
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                sendEmailVerification(user).then(() => {
                    saveUserData(user.uid, name, email, memberSince, favoriteTCG);
                }).catch((error) => {
                    alert('Error sending verification email: ' + error.message);
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    });
    
});
