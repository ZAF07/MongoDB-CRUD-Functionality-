const mongoose = require('mongoose');

// Define a schema

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: [1, "Don't forget the title!"]},
  body: {
    type: String,
    required: [1, "Missing blog body"]
  }
});

// Define a model
const Post = mongoose.model('post', postSchema);

// Exports modules
// Add Posts
exports.addPost = async (title, body) => {
 let errors = true;
  const newPost = new Post({
    title,
    body
  })

  try {
    const saving = await newPost.save((err) => {

      if (err) {
        console.log('ERROR HERE: --------> ', err.errors);
        let title,body;

        // if (err.errors.title) {
        //   title = err.errors.title
        // }
        // if (err.errors.body) {
        //   body = err.errors.body
        // }
           errors  = {
            title: err.errors.title,
            body: err.errors.body
          }
      }
    })

    return errors

  } catch (err) {
    console.log('Catch err');
  }
};
