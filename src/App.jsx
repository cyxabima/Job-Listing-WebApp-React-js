import React from 'react'

const App = () => {
  const name = "Ukasha"
  const spanStyle = { color: "green", fontFamily: "monospace" }

  // loop example
  const users = ['ukasha', 'Inshal', 'Urwah']
  return (
    <>
      <div className='text-red-500 text-5xl'>App</div>
      <p>Hello <span style={spanStyle}>{name}</span> welcome to my app</p>
      <ul>
        {users.map((user, index) => (<li key={index}>{user}</li>)

        )}
      </ul>
    </>
  )
}

export default App