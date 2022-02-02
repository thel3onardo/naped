const post = require('../model/Post');

class PostController {
    async store(req, res) {
        try {
            const data = await post.create(req.body);
            return res.status(201).json(data);
        }
        catch (err) {
            return res.status(500).json({ errors: [err.message]})
        }
    }
    async search(req, res) {
        try {
            const data = await post.find({});
            return res.status(200).json(data);
        }
        catch (err) {
            return res.status(500).json(err);
        }
    }
    delete(req, res) {
        post.findOneAndDelete({ _id: req.params.id }, function(err, document) {
            if (err) return res.status(500).json({ error: err });

            return res.status(200).send(`Documento ${document} deletado com sucesso!`)
        });
    }
    async update(req, res) {
        post.findOneAndUpdate({ _id: req.params.id }, req.body, (err, doc) => {
            if (err) return res.status(500).json({ error: err });

            return res.status(200).send(`Documento com id ${doc._id} atualizado com sucesso.`);
        } )
    }
};

module.exports = new PostController();