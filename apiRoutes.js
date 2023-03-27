const router = require('express').Router();
const store = require('./store');

router.get('/notes', (request, response) => {
  store
    .getNotes()
    .then((notes) => {
      return response.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

router.post('/notes', (request, response) => {
  store
    .addNote(request.body)
    .then((note) => response.json(note))
    .catch((err) => response.status(500).json(err));
});

module.exports = router;