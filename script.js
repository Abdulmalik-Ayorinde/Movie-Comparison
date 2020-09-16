const container = document.getElementById('container')
const searchBox = document.getElementById('search')
const searchButton = document.getElementById('button')


async function fetchData() {
    container.innerHTML = ''
await fetch(`http://www.omdbapi.com/?apikey=c3e4e145&s=${searchBox.value}`)
.then(resp => resp.json())
.then(data => {
    const info = data.Search

    info.forEach(result => {
        fetch(`http://www.omdbapi.com/?apikey=c3e4e145&t=${result.Title}&plot=full`)
        .then(resp => resp.json())
        .then(secondCallData => {
            console.log(secondCallData)
            putInDOm(result, secondCallData)
        }) 

})
})
}

function trimString(string, length) {

    if (string.length > length) {
        return string.substring(0, length) + `<button>...</button>`
       } else {
          return  string
       }
    // return string.length > length ? 
    //        string.substring(0, length) + `<button>...</button>` :
    //        string;
  };


function putInDOm(result, secondCallData) {
        // functionality for the first API call
        var details = document.createElement('div')
        var plot = secondCallData.Plot
        details.innerHTML = `
        <img src="${result.Poster}" alt="Broken Image">
        <li class="">${result.Title}</li>
        <li class="year">${result.Year}</li>
        <li class="type">${result.Type}</li>
        <li class="plot">${trimString(plot, 200)}</li>`
        details.classList.add('details')
        container.appendChild(details)
}

searchButton.addEventListener('click', fetchData)
