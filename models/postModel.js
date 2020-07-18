const mongoose = require('mongoose');
const _ = require('lodash');

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
    title: _.toString(title),
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

// Show posts

exports.showPosts = async () => {
  const postsARR = [];

  try {
    await Post.find({}, (err, posts) => {
      posts.forEach((post, i) => {
        postsARR.push(post);
      });

      console.log(posts);
      return postsARR
    })
  } catch (err) {
    console.log('ERROR FINDING POSTS----------> ', err);
  }
  return postsARR

  console.log('THIS IS POSTS ARRAY :------> ',postsARR);
};



exports.individualPost = async (id) => {
  let hereYouGo = '';
  try {
    await Post.findOne({_id: id}, (err, postFound) => {
      if (err) {
        console.log('ERROR FINDING ONE POST-------> ', err);
      } else {
        if (postFound) {
          hereYouGo = postFound
        } else {
          hereYouGo = false;
        }
      }
    })
  } catch (e) {
    console.log('CATCH ERROR FINDING ONE POST-------> ', e);
  }

  return hereYouGo;

};
