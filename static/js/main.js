document.addEventListener('DOMContentLoaded', (event) => {
    // Ensures that DOM is fully loaded before running

    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', function(event) {
        // Prevents the form from submitting original placeholder text.
        // CAN CHANGE LATER IF NEEDED
        event.preventDefault();

        let searchTerm = document.getElementById('search-bar').value.trim();

        if (searchTerm) {
            // Log the search term into the console for now. change later.
            console.log(searchTerm);
        } else {
            alert('Please enter a search term');
        }
    })
})