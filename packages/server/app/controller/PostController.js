const post = require('../models/PostModel')

class PostController {
  async store (req, res) {
    try {
      const posts = await post.create(req.body)
      return res.status(201).json({
        status: 'success',
        results: posts.length,
        data: {
          posts
        }
      })
    } catch (err) {
      return res.status(500).json({ errors: [err.message] })
    }
  }

  async search (req, res) {
    try {
      const { search, ...queryString } = req.query;
      const databaseQuery = (search) ? { $text: { $search: search }, ...queryString } : queryString
      const posts = await Post.find(databaseQuery);

      return res.status(200).json({
        status: 'success',
        results: posts.length,
        data: {
          posts
        }
      });
    } catch (err) {
      return res.status(500).json({ errors: [err.message] });
    }
  }

  delete (req, res) {
    post.findOneAndDelete({ _id: req.params.id }, function (err, document) {
      if (err) { return res.status(500).json({ error: err }) }

      return res.status(200).send(`Documento ${document} deletado com sucesso!`)
    })
  }

  update (req, res) {
    post.findOneAndUpdate({ _id: req.params.id }, req.body, (err, doc) => {
      if (err) { return res.status(500).json({ error: err }) }

      return res.status(200).send(`Documento com id ${doc._id} atualizado com sucesso.`)
    })
  }
};

module.exports = new PostController()