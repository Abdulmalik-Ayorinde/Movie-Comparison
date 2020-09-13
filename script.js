const container = document.getElementById('container')




var data = fetch('http://www.omdbapi.com/?apikey=c3e4e145&s=iron-man')
.then(resp => resp.json())
.then(data => {
    var info = data.Search

    info.forEach(result => {
    console.log(result)
        var img = document.createElement('img')
        img.setAttribute('src', `${result.Poster}`)
        container.appendChild(img)
        var details = document.createElement('div')
        details.innerHTML = `<li class="year">${result.Year}</li>
        <li class=""></li>
        <li class="plot"></li>`
        details.classList.add('details')
        container.appendChild(details)
})
})