const imageContainer = document.getElementById('image');
const imageElement = document.createElement("img");
const titleElement = document.getElementById('title');
const descriptionElement = document.getElementById('description');
const dateElement = document.getElementById('date');
const Url = document.getElementById('url');
const button = document.getElementById('button');

let n = 0;
const m = 0;
let today = new Date();
let month = today.getMonth() + 1;
let day = today.getDate();

function newDate() {

    const selected = apiDate.selected[n];
    const pages = selected.pages[m];
    const url = pages.content_urls.desktop.page;

    if (!pages.originalimage) {
        imageElement.src = 'https://t3.ftcdn.net/jpg/04/34/72/82/240_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg';
    } else {
        imageElement.src = pages.originalimage.source;
        imageElement.alt = pages.normalizedtitle;
        imageContainer.appendChild(imageElement);
    }

    console.log(apiDate);
    titleElement.textContent = pages.normalizedtitle;
    descriptionElement.textContent = selected.text;
    dateElement.textContent = `${day}/${month}/${selected.year}`;
    Url.href = url;
}



async function getAPI() {

    const apiUrl = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`;
    try {
        const response = await fetch(apiUrl);
        apiDate = await response.json();
        newDate();
    } catch (error) {
        // Catch Error
    }

}

function changeEvent() {
    n++;
    console.log(n);
    newDate();
}

button.addEventListener('click', changeEvent);

// On Load
getAPI();