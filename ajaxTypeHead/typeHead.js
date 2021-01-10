const end = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
//We have to convert this json file into array
const citi = [];// an array

// const prom = fetch(end);
// console.log(prom)

fetch(end)
    .then(blob => blob.json())
    .then(data => citi.push(...data))

function findMatches(wordtomatch, citi){
    return citi.filter(place => {
        const regex = new RegExp(wordtomatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}

function displayMatches(){
    const matchArray = findMatches(this.value, citi);
    // console.log(matchArray);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl" style="color: blue;">${this.value}</span>`);
        const stateName = place.city.replace(regex, `<span class="hl" style="color: blue;">${this.value}</span>`);
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                &nbsp &nbsp &nbsp &nbsp
                <span class="population" style="color: red; font-size: 15px; font-family: sans-serif;" >${place.population}</span>
            </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.searchbar');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
// searchInput.addEventListener('change', displayMatches);
// console.log(find);


// console.log(citi)