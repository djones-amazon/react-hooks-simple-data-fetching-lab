import React, { useState, useEffect} from "react";

function App() {
    const[image, setImage] = useState(null);


    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => setImage(data.message))
    }, [])

    if (!image) {
        return <h2>Loading...</h2>
    }

    return(
        <div>
            <img alt='A Random Dog' src={image} />
        </div>
    )

}

export default App