import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getUserData } from "./firebase.js";

document.addEventListener('DOMContentLoaded', function() {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const userData = await getUserData(user.email);
            if (userData) {
                document.getElementById('user-name').textContent = userData.name;
                document.getElementById('user-email').textContent = userData.email;
                document.getElementById('member-since').textContent = new Date(userData.memberSince).toLocaleDateString();
                document.getElementById('favorite-tcg').textContent = userData.favoriteTCG;

                // Save to session storage for quicker access next time
                sessionStorage.setItem('userName', userData.name);
                sessionStorage.setItem('userEmail', userData.email);
                sessionStorage.setItem('memberSince', userData.memberSince);
                sessionStorage.setItem('favoriteTCG', userData.favoriteTCG);
            } else {
                alert("Failed to load user data.");
            }
        } else {
            window.location.href = 'login.html'; // Redirect to login if not authenticated
        }
    });
});


