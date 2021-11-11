import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:3001/toys`)
    .then(r => r.json())
    .then(setToys)
  },[])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleDonation(toyObj) {
    setToys(toys.filter(toy => toy.id !== toyObj.id))
  }

  function handleLikes(toyObj) {
    const likes = toys.map(toy => toyObj.id === toy.id ? toyObj : toy)
    // {
    //   if(toyObj.id === toy.id) {
    //     return toyObj
    //   } else {
    //     return toy
    //   }
    // }
    
    setToys(likes)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm toys={toys} setToys={setToys} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onLikeClick={handleLikes} onDonateClick={handleDonation} />
    </>
  );
}

export default App;
