let button = document.querySelector('#resident');

function buttonFunc () {
    axios.get('https://swapi.dev/api/planets/?search=alderaan')
        .then((response) => {
            let residents = response.data.results[0].residents
            for(let i = 0; i < residents.length; i++) {
                axios.get(residents[i])
                    .then((response) => {
                        let nameElement = document.createElement("h2")
                        nameElement.textContent = response.data.name
                        document.querySelector('body').appendChild(nameElement)
                    })
            }
        })
}

button.addEventListener("click", buttonFunc)