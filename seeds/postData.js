const { Post } = require('../models/');

const postdata =
[
    {
        "postTitle": "Hello there!",
        "postContent": "This is a post!",
        "userId": 1,
    },
    {
        "postTitle": "Hello there again!",
        "postContent": "This is another post!",
        "userId": 2,
    },
    {
        "postTitle": "Hello there again again!",
        "postContent": "This is another post again!",
        "userId": 3,
    }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;