import React, { useState } from 'react'

// {
//   id: 1,
//   name: 'Mark Intosh',
//   username: '10101010',
//   image: 'https://robohash.org/10101010'
// },

function Robot(props) {
  const [upVotes, setUpVotes] = useState(0)
  const [downVotes, setDownVotes] = useState(0)

  function resetVotes() {
    setUpVotes(0)
    setDownVotes(0)
  }

  return (
    <div className="robot">
      <div className="avatar-section">
        <img className="avatar" alt="" src={props.robotInfo.image} />
      </div>
      <div className="info-section">
        <p className="username">@{props.robotInfo.username}</p>
        <p className="name">{props.robotInfo.name}</p>
      </div>
      <div className="vote-section">
        <button onClick={resetVotes}>
          <p>🔄</p>
        </button>
        <button onClick={() => setUpVotes(upVotes + 1)}>
          <p>👍</p>
          {upVotes}
        </button>
        <button onClick={() => setDownVotes(downVotes + 1)}>
          <p>👎</p>
          {downVotes}
        </button>
      </div>
    </div>
  )
}

export default Robot
