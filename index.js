require('dotenv').load()
const { PORT, MONGODB_URL } = process.env

// Set up our database connection and model

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(MONGODB_URL, _ => console.log(`Mongoose connected to ${MONGODB_URL}`))

const Puppy = mongoose.model('Puppy', {
  // human-readable name of the puppy
  name: { type: String, required: true },
  // An (optional) URL to a picture
  picture: String,
  // An array of likes (may be empty)
  likes: [{
    // the IP-adress identifying who liked the puppy
    ip: { type: String, required: true },
    // An (optional) comment justifying the like
    comment: String
  }]
})

// Set up our express app

const express = require('express')
const app = express()

// Enable app to parse JSON or FORM bodies in POST / PUT / PATCH requests

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Define our routes

app.get('/puppies', (req, res) =>
  Puppy.find()
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err))
)

app.post('/puppies', (req, res) => {
  const { name, picture } = req.body
  new Puppy({ name, picture }).save()
    .then(pup => res.status(201).json(pup))
    .catch(err => res.status(500).json(err))
})

app.get('/puppies/:id', (req, res) =>
  Puppy.findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err))
)

// Start the server if the app is not `require`d

if (!module.parent) {
  app.listen(PORT, _ => console.log(`Server started and listening on port ${PORT}`))
}

// Export the app so we can mount it somewhere else if we want

module.exports = app
