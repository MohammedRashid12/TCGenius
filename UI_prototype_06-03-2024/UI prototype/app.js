document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button'); // Get the search button element
    const searchInput = document.getElementById('search-input'); // Get the search input field element

    const watchlistTable = document.querySelector('#watchlist tbody'); // Get the tbody element of the watchlist table

    const homeButton = document.getElementById('home-button'); // Get the home button element

    const addButton = document.getElementById('add-to-watchlist'); // Get the add to watchlist button element
    const addModal = document.getElementById('add-modal'); // Get the add modal element
    const closeAddModal = document.getElementById('close-add-modal'); // Get the close button for add modal

    const loginModal = document.getElementById('login-modal'); // Get the login modal element
    const signupModal = document.getElementById('signup-modal'); // Get the signup modal element

    const inspectModal = document.getElementById('inspect-modal'); // Get the inspect modal element
    const closeInspectModal = document.getElementById('close-inspect-modal'); // Get the close button for inspect modal

    const addForm = document.getElementById('add-form'); // Get the add form element

    const loginForm = document.getElementById('login-form'); // Get the login form element
    const signupForm = document.getElementById('signup-form'); // Get the signup form element

    const switchToSignupButton = document.getElementById('switch-to-signup'); // Get the switch to signup button element

    const logo = document.getElementById('logo'); // Get the TCGenius logo element

    
    loginModal.style.display = 'block'; // Displays login modal by default when the page loads

    // Event listener for the home button click 
    homeButton.addEventListener('click', function() {
        document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
    });

    // Event listener for the logo click 
    logo.addEventListener('click', function() {
        document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
    });

    // Event listener for the add button click event
    addButton.addEventListener('click', function() {
        addModal.style.display = 'block';
    });

    // Event listener for closing the add modal
    closeAddModal.addEventListener('click', function() {
        addModal.style.display = 'none';
    });

    // Event listener for closing the inspect modal
    closeInspectModal.addEventListener('click', function() {
        inspectModal.style.display = 'none';
    });

    // Event listener for the search button click event
    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.toLowerCase(); // Get the search term and convert it to lowercase
        const filteredItems = sampleItems.filter(item => 
            item.name.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm)
        ); // Filter items based on the search term
        displaySearchResults(filteredItems); // Display the filtered search results
    });

    // Event listener for the add form submit event
    addForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting
        const cardName = document.getElementById('card-name').value; // Get card name
        const cardSet = document.getElementById('card-set').value; // Get card set
        const newItem = { name: cardName, category: cardSet, price: 'N/A', quantity: 'N/A' };
        addToWatchlist(newItem); // Add to watchlist
        saveWatchlist(); // Save the updated watchlist
        addModal.style.display = 'none'; // Close the modal
        addForm.reset(); // Reset the form
    });

    // Event listener for the login form submit event
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting
        loginModal.style.display = 'none'; // Close the login modal
        // Redirect to the home page (scroll to main content)
        document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
    });

    // Event listener for the signup form submit event
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;
        const errorMessage = document.getElementById('signup-error');

        if (password !== confirmPassword) {
            errorMessage.textContent = "Passwords do not match!";
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
            signupModal.style.display = 'none'; // Close the signup modal
            // Redirect to the home page (scroll to main content)
            document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Event listener for the switch to signup button click event
    switchToSignupButton.addEventListener('click', function() {
        loginModal.style.display = 'none'; // Close the login modal
        signupModal.style.display = 'block'; // Open the signup modal
    });

    // Function to display search results
    function displaySearchResults(items) {
        const searchSection = document.getElementById('search'); // Get the search section element
        let resultContainer = document.getElementById('search-results'); // Get the current search results container, if it exists

        // Clear previous results if they exist
        if (resultContainer) {
            resultContainer.remove();
        }

        // Create a new container for search results
        resultContainer = document.createElement('div');
        resultContainer.id = 'search-results';
        searchSection.appendChild(resultContainer); // Append the new container to the search section

        // Iterate over each item and create a card for it
        items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item-card'); // Add a class for styling
            itemDiv.innerHTML = `
                <h3>${item.name}</h3>
                <p>Category: ${item.category}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
                <button class="add">Add to Watchlist</button>
            `; // Populate the card with item details
            resultContainer.appendChild(itemDiv); // Add the card to the result container

            // Add listener for the "Add to Watchlist" button
            itemDiv.querySelector('.add').addEventListener('click', function() {
                addToWatchlist(item);
                saveWatchlist(); // Save the updated watchlist
            });
        });
    }

    // Function to add an item to the watchlist
    function addToWatchlist(item) {
        const row = document.createElement('tr'); // Create a new table row
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td>
                <button class="inspect">Inspect</button>
                <button class="remove">Remove</button>
            </td>
        `; // Populate the row with item details, inspect button, and remove button
        watchlistTable.appendChild(row); // Add the row to the watchlist table

        // Add event listener for the "Inspect" button
        row.querySelector('.inspect').addEventListener('click', function() {
            showCardDetails(item); // Show card details when inspect button is clicked
        });

        // Add event listener for the "Remove" button
        row.querySelector('.remove').addEventListener('click', function() {
            row.remove(); // Remove the row from the watchlist table
            saveWatchlist(); // Save the updated watchlist
        });
    }

    // Function to show card details in the inspect modal
    function showCardDetails(item) {
        const cardDetails = document.getElementById('card-details');
        cardDetails.innerHTML = `
            <h3>Card Name: ${item.name}</h3>
            <p>Set: ${item.category}</p>
            <p>Market Price: ${item.price}</p>
            <p>52-Week Range: ${item.quantity}</p>
            <img src="path/to/card/image.jpg" alt="${item.name}">
        `;
        inspectModal.style.display = 'block';
    }

    // Function to save the watchlist to local storage
    function saveWatchlist() {
        const watchlistItems = [];
        watchlistTable.querySelectorAll('tr').forEach(row => {
            const cells = row.querySelectorAll('td');
            watchlistItems.push({
                name: cells[0].innerText,
                category: cells[1].innerText,
                price: cells[2].innerText,
                quantity: cells[3].innerText
            });
        });
        localStorage.setItem('watchlist', JSON.stringify(watchlistItems));
    }
});
