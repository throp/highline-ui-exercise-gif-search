import React from 'react';
import './App.css'
import {searchGifs} from './api.js'


function App() {
    const [searchString, setSearchString] = React.useState()
    const [images, setImages] = React.useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        searchGifs(searchString)
            .then((data) => {
                setImages(data.data);
            });
    }

    const handleSearchStringChanged = (event) => {
        setSearchString(event.target.value);
    }

    return (
        <div>
            <h1>Gif Search</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search" value={searchString} onChange={handleSearchStringChanged}/>
                    <button>Search</button>
                    <button>Clear</button>
                </form>
            </div>
            <h2>Results</h2>
            <div>
                {
                    images && images.map(image => (
                        <div key={image.id} >
                            <img src={image.images.original.url}></img>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default App
