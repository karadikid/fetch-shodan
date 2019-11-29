//Shodan URL String for search
//https://api.shodan.io/shodan/host/search?key={YOUR_API_KEY}&query={query}&facets={facets}

const url = "https://api.shodan.io/shodan/host/search?";

const apiKey = "6Ew4Z6p9kOwelROHLtOwn23ChCIoR0H1"
const query = "port:1494,3389 org:\"amazon web services\""

// targeting the form to attach the event handler
const form = document.querySelector("form");

// targetting the form input to get the value to search for in the API request
const formInput = form.querySelector("input.shodanName");

// targetting the element I want to update with the API data
const shodanH2 = document.querySelector("h2");
const shodanImg = document.querySelector("img");

// Add event listener to the form

form.addEventListener("submit", evt => {
  evt.preventDefault();

  const value = formInput.value;

  console.log(url);
  console.log(url + value);
  fetch(url + value)
    .then(res => res.json())
    .then(shodan => {
      console.log(shodan, shodan.name);
      const shodanName = shodan.name;
      const shodanScreenShot = shodan.sprites.front_default;
      shodanH2.innerText = shodanName;
      // console.log(pokemonImg);
      shodanImg.setAttribute("src", shodanScreenShot);
    })
    .catch(err => console.log(err));
});

// fetch(url)
//   .then(res => res.json())
//   .then(res => {
//     console.log("deserialized data", res);
//   });
