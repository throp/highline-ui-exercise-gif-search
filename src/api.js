
/*
Create an account on https://developers.giphy.com/ and get an API key
To get an api key go to the dashboard and click on "Create an App" and
then select "API" and then "Next Step" and then "Create App"

copy the key and paste it in the API_KEY constant below
 */

const API_KEY = "DJNTd5U87XkO2f3i5de0ZJel6sSdd72w";

export function searchGifs(searchTerm) {
    return fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURI(searchTerm)}&limit=25&offset=0&rating=g&lang=en`
    )
        .then((response) => response.json());
}