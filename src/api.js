/*
Create an account on https://developers.giphy.com/ and get an API key
To get an api key go to the dashboard and click on "Create an App" and
then select "API" and then "Next Step" and then "Create App"

copy the key and paste it in the API_KEY constant below
 */

const API_KEY = "YOUR_API_KEY_HERE";

export function searchGifs(searchTerm) {
    return fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURI(searchTerm)}&limit=25&offset=0&rating=g&lang=en`
    )
        .then((response) => response.json());
}