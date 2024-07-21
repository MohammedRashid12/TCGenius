// Firebase modules for app initialization and authentication
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
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

//get all sets in a TCG
export async function getTCGSets(cardGame, setList) {
    const setNames = [];
    const setQuery = query(collection(db, "TradingCardGames", cardGame, "Sets"));
    //console.log(setQuery);
    const listOfSets = await getDocs(setQuery);
    //const listOfSets = await getDocs(collection(db, "TradingCardGames", cardGame, "Sets", "Spark of Rebellion", "cards"));
    //console.log(listOfSets);
    listOfSets.forEach((doc) => {
        const set = doc.data();
        //const set = doc.data();
        //console.log(doc.id);
        setNames.push(doc.id);
        //const option = document.createElement('option');
        //option.value = doc.id;
        //option.textContent = doc.id;
        //setList.appendChild(option);

    });
    //console.log(setNames);
    return setNames;
}

//get all cards in a set
export async function getCardsInSet(setName, dataList, cardGame){
    var cards = [];
    //console.log(setName);
    const q = query(collection(db, "TradingCardGames", cardGame, "Sets", setName, "cards"));
    const listOfCards = await getDocs(q);
    listOfCards.forEach((doc) => {
        const card = doc.data();
        cards.push(card);
        //console.log(doc.id, " => ", doc.data());
        /*const option = document.createElement('option');
        option.value = card;
        option.textContent = card.name;
        dataList.appendChild(option);*/
    });
    //console.log(cards);
    //if (listOfCards){
    //console.log("returning listOfCards");
    //return listOfCards;
    //}
    return cards;
    //return await getDocs(collection(db, "TradingCardGames", "Star Wars Unlimited", "Sets", setName, "cards"))
}

export async function saveUserData(userId, email) {
    email = email.toLowerCase();
    const usersRef = collection(db, "Users");
    await setDoc(doc(usersRef, email), {
        email: email,
        userId: userId
    });
    console.log('Data Saved correctly (probably)');
    return 0;
}

//Save a selected card to the watchlist in the database
export async function saveCardToUserWatchlist(setName, cardId, cardGame) {
    const docRef = doc(db, "TradingCardGames", "Star Wars Unlimited", "Sets", setName, "cards", cardId.toString());
    console.log(setName)
    console.log(cardId)

    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
        console.log(docSnap.data());
    } else {
        console.log("Nadda");
    }

    //console.log(auth.currentUser.email)
    const userRef = collection(db, "Users", auth.currentUser.email, cardGame);
    setDoc(doc(userRef, cardId.toString()),
        docSnap.data()
    );
}

export async function retrieveWatchlist(cardGame, email) {
    var watchlist = []
    //onAuthStateChanged(auth, async (user) => {
            //const auth = getAuth(app);
            //console.log(auth.currentUser.email);
            const q = query(collection(db, "Users", email, cardGame));
            if (q.empty) {
                console.log("empty");
                return watchlist;
            } else {
                const listOfCards = await getDocs(q);
                listOfCards.forEach((doc) => {
                    const card = doc.data();
                    console.log(card);
                    watchlist.push(card);
                });
                console.log(watchlist);
                console.log("Not empty" + watchlist);
                return watchlist;
            }

            //return watchlist;
    //});
    //return watchlist;
}




