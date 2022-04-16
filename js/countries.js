const loadcountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountris(data))
}

loadcountries()
const displayCountris = countries => {
    // for (const country of countries) {
    //     console.log(country)
    // }
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        console.log(country)
        const div = document.createElement('div');
        div.classList.add('country');
        const h3 = document.createElement('h2');
        h3.innerText = country.name.common;
        div.appendChild(h3);

        const p = document.createElement('p');
        p.innerText = country.capital;
        div.appendChild(p);
        countriesDiv.appendChild(div)
    })
}