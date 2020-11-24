const app = document.getElementById('root');
const logo = document.createElement('img');

logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);
var request = new XMLHttpRequest();

//open connection

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
 var data = JSON.parse(this.response);
if(request.status >= 200 && request.status < 400) {
    data.forEach((movie) => {
        //div with a card class
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        //h1 to set text content to the films title
        const h1 = document.createElement('h1');
        h1.textContent = movie.title;

        //paragrah to set text content to the films description
        const p = document.createElement('p');
        movie.description = movie.description.substring(0,300); //limit to 300 chars
        p.textContent = `${movie.description}...` //end with an ellipses

        //appending cards to the container element
        container.appendChild(card);

        card.appendChild(h1);
        card.appendChild(p);
    })
} else {
    console.log('error')
}
 
}

request.send()