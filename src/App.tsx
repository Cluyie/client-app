import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { ImageObj } from './types/imageType';

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/images').then(
      response => {
        console.log(response);
        setPhotos(response.data);
      }
    )
  }, [])

  const frontPage = (photoByte: string) =>  {
    var url = 'data:image/png;base64,' + photoByte;
    return <img src={url}/>
    
  }

  return (
    <div className="App">
      <header className="App-header">
       <ul>
          {photos!.map((photo: ImageObj) => (
            <li key={photo.id}>
              {frontPage(photo.imageData)}
              {photo.imageTitle}

            </li>
          ))}
       </ul>
      </header>
    </div>
  );
}

export default App;
