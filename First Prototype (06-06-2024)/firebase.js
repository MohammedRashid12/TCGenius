// Firebase modules for app initialization / authentication
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, setDoc, doc, addDoc, getDocs, getDoc, query, where } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"


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

//  Firebase app initialization
const app = initializeApp(firebaseConfig);

// Firebase Auth instance
const auth = getAuth(app);

// Firestore Database Instance
const db = getFirestore(app);

export { auth, db };

export async function getTCGSets(cardGame) {
    const setNames = [];
    const q = query(collection(db, "TradingCardGames", "Star Wars Unlimited", "Sets"));
    const listOfSets = await getDocs(q);
    listOfSets.forEach((doc) => {
        //const set = doc.data();
        console.log(doc.id);
        setNames.push(doc.id);

    });
    return setNames;
}

export async function getCardsInSet(setName, dataList){
    console.log(setName);
    const q = query(collection(db, "TradingCardGames", "Star Wars Unlimited", "Sets", setName, "cards"));
    const listOfCards = await getDocs(q);
    listOfCards.forEach((doc) => {
        const card = doc.data();
        console.log(doc.id, " => ", doc.data());
        const option = document.createElement('option');
        option.value = card.name;
        dataList.appendChild(option);
    });
    //if (listOfCards){
    console.log("returning listOfCards");
    return listOfCards;
    //}
    //return listOfCards;
    //return await getDocs(collection(db, "TradingCardGames", "Star Wars Unlimited", "Sets", setName, "cards"))
}

export async function saveUserData(userId, name, email, memberSince, favoriteTCG) {
    try {
        const usersRef = collection(db, "Users");
        await setDoc(doc(usersRef, email), {
            userId: userId,
            name: name,
            email: email,
            memberSince: memberSince,
            favoriteTCG: favoriteTCG
        });
        console.log('User data saved successfully');
    } catch (error) {
        console.error('Error saving user data: ', error);
    }
}

export async function getUserData(email) {
    try {
        const userRef = doc(db, "Users", email.toLowerCase());
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
            return userDoc.data();
        } else {
            console.log("No such document!");
            return null;
        }
    } catch (error) {
        console.error("Error fetching user data: ", error);
        return null;
    }
}



export async function saveCardToUserWatchlist(setName, cardId) {
    const docRef = doc(db, "TradingCardGames", "Star Wars Unlimited", "Sets", setName, "cards", cardId.toString());
    console.log(setName)
    console.log(cardId)

    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
        console.log(docSnap.data());
    } else {
        console.log("Nadda");
    }

    console.log(auth.currentUser.email)
    const userRef = collection(db, "Users", auth.currentUser.email, "Watchlist");
    setDoc(doc(userRef, cardId.toString()),
        docSnap.data()
    );
}






