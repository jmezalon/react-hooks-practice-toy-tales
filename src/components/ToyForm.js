import React, { useState } from "react";

function ToyForm({ toys, setToys }) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")

  function handleAddSubmit(e) {
    e.preventDefault()

    const newToy = {
      name: name,
      image: image,
      likes: 0
    }

    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newToy)
    })
    .then(r => r.json())
    .then(data => setToys([data, ...toys]))
  }

  return (
    <div className="container">
      <form onSubmit={handleAddSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name={name}
          onChange={(e)=>setName(e.target.value)}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name={image}
          placeholder="Enter a toy's image URL..."
          onChange={(e)=>setImage(e.target.value)}
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
