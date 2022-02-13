const post = require('../model/Post')

class SearchPostController {
  async search (req, res) {
    post.createIndex({ 'nome': 'text' })
    console.log(req.query.search)
    console.log(req.params)
    try {
      const data = await post.find({ $text: { $search: req.query.search } })
      return res.status(201).json(data)
    } catch (err) {
      console.log(err)
      return res.status(500).send('Houve um erro ao conectar-se com o banco de dados.')
    }
  }
}

module.exports = new SearchPostController()