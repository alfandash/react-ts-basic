import React from 'react'

const App = () => {
  const env = process.env.REACT_APP_API_ENDPOINT

  console.log(process.env.NODE_ENV, 'env', process.env.REACT_APP_API_ENDPOINT)

  return (
    <h1>
      React App

      this then env {env}
    </h1>
  )
}

export default App