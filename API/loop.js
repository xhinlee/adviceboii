document.addEventListener('DOMContentLoaded', () => {
    const adviceElement = document.getElementById('advice');
    const refreshButton = document.getElementById('refresh-button');
    const apiUrl = 'https://api.adviceslip.com/advice';

    
    const fetchAdvice = () => {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                adviceElement.textContent = data.slip.advice;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                adviceElement.textContent = 'Failed to fetch advice. Please try again.';
            });
    };

    // Fetch initial advice when the page loads
    fetchAdvice();


    refreshButton.addEventListener('click', fetchAdvice);
});
