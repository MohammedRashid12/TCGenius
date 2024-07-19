// Imports Firebase modules for app initialization and authentication 
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";
import { getCardsInSet, saveCardToUserWatchlist, getTCGSets } from "./firebase.js";

// Firebase configuration 
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

const app = initializeApp(firebaseConfig); // Firebase initialization
const auth = getAuth(app); // Get Firebase Auth instance

document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button'); // Get the search button element
    const searchInput = document.getElementById('search-input'); // Get the search input field element
    const watchlistTable = document.querySelector('#watchlist-items'); // Get the tbody element of the watchlist table
    const homeButton = document.getElementById('home-button'); // Get the home button element
    const addButton = document.getElementById('add-to-watchlist'); // Get the add to watchlist button element
    const addModal = document.getElementById('add-modal'); // Get the add modal element
    const closeAddModal = document.getElementById('close-add-modal'); // Get the close button for add modal
    const inspectModal = document.getElementById('inspect-modal'); // Get the inspect modal element
    const closeInspectModal = document.getElementById('close-inspect-modal'); // Get the close button for inspect modal
    const addForm = document.getElementById('add-form'); // Get the add form element
    const cardSetSelect = document.getElementById('card-set'); // Get the set name select element
    const cardNameInput = document.getElementById('card-name'); // Get the card name input element
    const cardNamesDataList = document.getElementById('card-names'); // Get the card names datalist element
    const createNewWatchlistButton = document.getElementById('create-new-watchlist');
    const createWatchlistModal = document.getElementById('create-watchlist-modal');
    const closeCreateWatchlistModal = document.getElementById('close-create-watchlist-modal');
    const createWatchlistForm = document.getElementById('create-watchlist-form');
    const gameSelect = document.getElementById('game-select');

    const lorcanaCardData = {
        'Set 1': [
            { id: 1001, name: "Card A" },
            { id: 1002, name: "Card B" },
            { id: 1003, name: "Card C" },
            // Add more Lorcana cards here
        ],
        // Add more Lorcana sets here
    };

    var cardData = {};

    let currentGame = 'Star Wars Unlimited';
    
    createNewWatchlistButton.addEventListener('click', function() {
        createWatchlistModal.style.display = 'block';
    });

    closeCreateWatchlistModal.addEventListener('click', function() {
        createWatchlistModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == createWatchlistModal) {
            createWatchlistModal.style.display = 'none';
        }
    });

    createWatchlistForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const gameChoice = gameSelect.value;
        if (gameChoice === 'Star Wars Unlimited' || gameChoice === 'Lorcana') {
            currentGame = gameChoice;
            alert(`New watchlist created for ${currentGame}`);
            updateCardSetOptions();
            createWatchlistModal.style.display = 'none';
        } else {
            alert("Invalid choice. Please choose 'Star Wars Unlimited' or 'Lorcana'.");
        }
    });

    function updateCardSetOptions() {
        while (cardSetSelect.firstChild) {
            cardSetSelect.removeChild(cardSetSelect.firstChild);
        }
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.disabled = true;
        defaultOption.selected = true;
        defaultOption.textContent = 'Select a set';
        cardSetSelect.appendChild(defaultOption);

        //const sets = currentGame === 'Star Wars Unlimited' ? cardData : lorcanaCardData;
        getTCGSets(currentGame, cardSetSelect)
        .then((result) => {
            console.log(result);
            for (const setName in result) {
                const option = document.createElement('option');
                option.value = result[setName];
                option.textContent = result[setName];
                cardSetSelect.appendChild(option);
            }
        });

    }

    addForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const setName = cardSetSelect.value;
        const cardName = cardNameInput.value;
        const cardId = (currentGame === 'Star Wars Unlimited' ? cardData : lorcanaCardData)[setName].find(card => card.name === cardName).id;
        //saveCardToUserWatchlist(setName, cardId);
    });

    // Call updateCardSetOptions on load to populate options for the default game
    updateCardSetOptions();

    // Populate the datalist with card names
    cardSetSelect.addEventListener('change', function() {
        cardNamesDataList.innerHTML = ''; // Clear previous options
        const selectedSet = cardSetSelect.value;
        if (selectedSet) {// && cardData[selectedSet]) {
            getCardsInSet(selectedSet, cardNamesDataList, currentGame)
            .then((result) => {
                cardData[selectedSet] = result;
                cardData[selectedSet].forEach(card => {
                    const option = document.createElement('option');
                    option.value = card.name;
                    cardNamesDataList.appendChild(option);
                });
                //console.log(cardData);
                //console.log(dbCardData);
            });
            //const getCards = async() => {
                /*var listOfCards = *//*await*//* getCardsInSet(selectedSet, cardNamesDatalist).then(() => {
                    console.log("returned listOfCards");
                    listOfCards.data.forEach((card) => {
                        card.data();
                        const option = document.createElement('option');
                        option.value = card.name;
                        cardNamesDataList.appendChild(option);
                    });
                });*/
            //}

            /*cardData[selectedSet].forEach(card => {
                const option = document.createElement('option');
                option.value = card.name;
                cardNamesDatalist.appendChild(option);
            });*/
        }
    });

    searchButton.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
            searchItems(query);
        }
    });

    addButton.addEventListener('click', function() {
        addModal.style.display = 'block';
    });

    closeAddModal.addEventListener('click', function() {
        addModal.style.display = 'none';
    });

    closeInspectModal.addEventListener('click', function() {
        inspectModal.style.display = 'none';
    });

    addForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const cardSet = cardSetSelect.value;
        const cardName = cardNameInput.value.trim();
        const card = cardData[cardSet].find(card => card.name === cardName);

        if (card) {
            addToWatchlist(card, cardSet);
            addModal.style.display = 'none';
        }
    });

    function searchItems(query) {
        // Implement the search functionality here
        console.log('Searching for:', query);
    }

    function addToWatchlist(card, cardSet) {
        // Implement the add to watchlist functionality here
        console.log('Adding to watchlist:', cardSet, card.name);
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${card.name}</td>
            <td>${cardSet}</td>
            <td>${card.Normal}</td>
            <td>${card.Foil}</td>
            <td>N/A</td>
            <td>
                <button class="inspect" onclick="inspectCard('${card.name}', '${cardSet}')">Inspect</button>
                <button class="remove" onclick="removeFromWatchlist(this)">Remove</button>
            </td>
        `;
        watchlistTable.appendChild(newRow);
        saveCardToUserWatchlist(cardSet, card.id);
    }

    window.inspectCard = function(cardName, cardSet) {
        // Implement the inspect card functionality here
        console.log('Inspecting:', cardName, cardSet);
        inspectModal.style.display = 'block';
    };

    window.removeFromWatchlist = function(button) {
        // Implement the remove from watchlist functionality here
        const row = button.closest('tr');
        row.remove();
    };
});
