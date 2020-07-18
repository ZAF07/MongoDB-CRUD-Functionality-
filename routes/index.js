var express = require('express');
var router = express.Router();
const postController = require('../controllers/postController');

/* GET Handlers */
router.get('/', postController.homePage);

router.get('/about', postController.aboutPage);

router.get('/contact', postController.contactPage);

router.get('/compose', postController.composePost);

router.get('/posts/:id', postController.individualPosts);

// POST Handlers

router.post('/compose', postController.newPost);

router.get('/posts/delete/:id', postController.deletePost);



module.exports = router;
