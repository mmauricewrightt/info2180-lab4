document.addEventListener("DOMContentLoaded", () => {
    const heroForm = document.querySelector('#getform'); 

    heroForm.addEventListener('submit', handleFormSubmission);

    function handleFormSubmission(event) {
        event.preventDefault(); 

        const heroInputValue = document.querySelector('#hero').value; 

        const request = new XMLHttpRequest(); 

        const apiEndpoint = `superheroes.php?query=${encodeURIComponent(heroInputValue)}`; 

        request.open('GET', apiEndpoint, true);

        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        request.onload = function () {
            if (request.status === 200) {
                const output = document.querySelector('#response'); 
                output.innerHTML = request.responseText;
                console.log(request.responseText);
            }
        };

        request.onerror = () => {
            console.error('Error detected');
        };

        request.send();
    }
});
