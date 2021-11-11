import React from "react";

function ToyCard({ toyObj: { name, image, id, likes }, toyObj, onDonateClick, onLikeClick }) {

  function handleDonateClick() {
    fetch('http://localhost:3001/toys/'+id, {
      method: 'DELETE'
    })
    .then(() => onDonateClick(toyObj))
  }

  function handleLikeClick() {
    fetch('http://localhost:3001/toys/'+id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ likes: toyObj.likes + 1})
    })
    .then(r => r.json())
    .then(likeToy => onLikeClick(likeToy))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLikeClick} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDonateClick} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
