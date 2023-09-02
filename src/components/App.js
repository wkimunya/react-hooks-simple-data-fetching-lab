// create your App component here
import React, {useEffect, useState} from 'react'

function App() {
  const [dogImage,setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) => res.json())
    .then((data) => {
        setDogImage(data.message);
        setLoading(false);
    })
  }, []);
  return (
    <div>
        <h1> Random Dod Image</h1>
        {loading ? (
            <p>Loading ...</p>
        ) : (
            <div>
             <img src={dogImage} alt="A Random Dog" />
             </div>   
        )}
    </div>
  )
}

export default App

