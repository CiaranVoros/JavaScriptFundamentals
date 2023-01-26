const AuthorController = require('../controllers/author.controller')
const {Author} = require('../models/author.model')

module.exports = function(app) {
    app.get('/allAuthors', AuthorController.allAuthors);
    app.get('/author/:id', AuthorController.getAuthor);
    app.post('/new/author', AuthorController.createAuthor);
    app.put('/author/edit/:id', AuthorController.updateAuthor);
    app.delete('/author/delete/:id', AuthorController.deleteAuthor);
}