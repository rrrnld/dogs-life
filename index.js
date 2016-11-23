require('dotenv').load()

// Set up our express app

const express = require('express')
const app = express()

// Define our routes

app.get('/', (req, res) => res.json({ 'message': 'Hello world' }))

// Start the server if the app is not `require`d

if (!module.parent) {
  const { PORT } = process.env
  app.listen(PORT, _ => console.log(`Server started and listening on port ${PORT}`))
}

// Export the app so we can mount it somewhere else if we want

module.exports = app
