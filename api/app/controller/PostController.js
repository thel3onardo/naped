const post = require('../model/Post');

class PostController {
    async store(req, res) {
        const data = await post.create(req.body);
        console.log(data);

        return res.json(data);
    }
    async search(req, res) {
        const data = await post.find({ name: 'Batman' });

        return res.json(data);
    }
};

module.exports = new PostController();