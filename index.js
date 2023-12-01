const searchInput = document.getElementById('searchInput');
const autocompleteList = document.getElementById('autocompleteList');

const suggestions = ['Toyota', 'Maercedes-Benz', 'Peugeot', 'Mazda', 'Honda', 'BMW', 'Ford', 'Hyundai', 'Acura', 'Jac', 'IVM', 'Chevrolet', 'Renault', 'Ferrari',
    'Lamboghini', 'Rolls Royce ', 'Range Rover', 'Land Rover', 'Jeep', 'Opel', 'Tesla'];

searchInput.addEventListener('input', function () {
    const userInput = searchInput.value.toLowerCase();
    const matchingSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(userInput));

    autocompleteList.innerHTML = '';


    matchingSuggestions.forEach(suggestion => {
        const listItem = document.createElement('li');
        listItem.classList.add('autocomplete-item');
        listItem.textContent = suggestion;
        listItem.addEventListener('click', function () {

            searchInput.value = suggestion;

            autocompleteList.innerHTML = '';
        });
        autocompleteList.appendChild(listItem);
    });


    autocompleteList.style.display = matchingSuggestions.length > 0 ? 'block' : 'none';
});


document.addEventListener('click', function (event) {
    if (event.target !== searchInput) {
        autocompleteList.style.display = 'none';
    }
});