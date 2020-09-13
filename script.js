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
        fetch(`http://www.omdbapi.com/?apikey=c3e4e145&t=${result.Title}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        }) 


        // functionality for the first API call
        var img = document.createElement('img')
        img.setAttribute('src', `${result.Poster}`)
        container.appendChild(img)
        var details = document.createElement('div')
        details.innerHTML = `<li class="">${result.Title}</li>
        <li class="year">${result.Year}</li>
        <li class="type">${result.Type}</li>
        <li class="id">${result.imdbID}</li>`
        details.classList.add('details')
        container.appendChild(details)
   
})

})


}

searchButton.addEventListener('click', fetchData)
