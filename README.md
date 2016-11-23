# 🐶 Dog's Life

Example Project for the RESTful API presentation by Andreas Morgner and Arne Schlüter.
The presentation is part of the IMI Master's seminar "Web Applications" at the HTW Berlin, winter semester 2016.

## Set up

Clone the repository and set up the configuration by copying `.env.example` to `.env`. Edit the `.env` to suit your environment.

```
$ node --version
v7.0.0
$ git clone $REPO
$ cd dogs-life
$ npm install
$ cp .env.example .env
$ $EDITOR .env
```

Now you can run the server (assuming you have MongoDB running in the background):

```
$ # Run a development server which automatically restarts on code changes
$ npm run dev
$ # Start a long-running server
$ npm start
```
