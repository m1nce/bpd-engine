document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('add-query-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();  // Prevent the default form submission

        const formData = {
            class: document.getElementById('class').value,
            function: document.getElementById('function').value,
            input: document.getElementById('input').value,
            output: document.getElementById('output').value,
            example: document.getElementById('example').value,
            example_result: document.getElementById('example_result').value
        };

        fetch('/add-query', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            alert('Incomplete')
        });
    });
});
