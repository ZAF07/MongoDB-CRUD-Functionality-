var express = require('express');
var router = express.Router();
const postController = require('../controllers/postController');

/* GET home page. */
router.get('/', postController.homePage);

router.get('/about', postController.aboutPage);

router.get('/contact', postController.contactPage);

router.get('/compose', postController.composePost);

router.post('/compose', postController.newPost);

router.get('/posts/:id', postController.individualPosts);

module.exports = router;
