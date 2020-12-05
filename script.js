const container = document.getElementById('container')
const searchBox = document.getElementById('search')
const searchButton = document.getElementById('button')


async function fetchData() {
    container.innerHTML = ''
    if (window.location.protocol.indexOf('https') == 0){
  var el = document.createElement('meta')
  el.setAttribute('http-equiv', 'Content-Security-Policy')
  el.setAttribute('content', 'upgrade-insecure-requests')
  docum
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
           return string
       }
 
       // else if (string.length = undefined) {
      //  return  "N/a"
    //} 
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
        <li class="title"><b>Title: </b>${result.Title}</li>
        <li class="year"><b>Year: </b>${result.Year}</li>
        <li class="type"><b>${result.Type}</b></li>
        <li class="plot"><b>Plot: </b>${trimString(plot, 200)}</li>`
        details.classList.add('details')
        container.appendChild(details)
}

searchButton.addEventListener('click', fetchData)
