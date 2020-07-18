const postModel = require('../models/postModel');
const _ = require('lodash');
const postsARR = [];

exports.newPost = (req,res) => {
  const title = req.body.title;
  const body = req.body.body;
  console.log('This is the body--------> ', body);

  postModel.addPost(title,body).then(result => {
    let tittleErr,bodyErr;
    const titleValue = title;
    const bodyValue = body;
    console.log('$$#$#%&R@%&^&$^&@&', result);
    if (result != true) {

      if (result.title) {
        tittleErr = result.title.properties.message
      }

      if (result.body) {
        bodyErr = result.body.properties.message
      }

      res.render('compose', {
        title: 'Create a New Blog',
        tittleErr: tittleErr,
        bodyErr: bodyErr,
        titleValue: titleValue,
        bodyValue: bodyValue,
        posts: false
      })

    } else {
      // const postsARR = [];
      postModel.showPosts().then(posts => {
        console.log('postController POSTS -------> ', posts);
        // if (posts.length > 0) {
        //   posts.forEach((post, i) => {
        //     if (!postsARR.includes(post)) {
        //       postsARR.push(post)
        //     }
        //   });
        //
        //
        //   // post.push(posts);
        //   console.log('THIS IS FINAL ARRAY-------> ' ,postsARR);
        // }
        res.render('index', {
          title: 'Start Blogging Again!',
          success: 'Got it! You\'ve saved a new post!',
          deleted: false,
          posts: posts
         });
      })
      // res.render('index', {
      //   title: 'Start Blogging Again!',
      //   success: 'Got it! You\'ve saved a new post!',
      //   posts: false
      // });
    }
  })
};

exports.homePage = (req,res) => {

  // postModel.showPosts();
  // const postsARR = [];
  postModel.showPosts().then(posts => {
    console.log('postController POSTS -------> ', posts);
    // if (posts.length > 0) {
    //   posts.forEach((post, i) => {
    //     if (!postsARR.includes(post)) {
    //       postsARR.push(post)
    //     }
    //   })
    //
    //
    //
    //   // post.push(posts);
    //   console.log('THIS IS FINAL ARRAY-------> ' ,postsARR);
    // }
    res.render('index', {
      title: 'Start Blogging Again!',
      success: false,
      deleted: false,
      posts: posts
     });
  })

}

exports.composePost = (req,res) => {
  const title = 'Create a New Blog';
  res.render('compose', {
    title: title,
     tittleErr: false,
      bodyErr: false,
      titleValue: false,
      bodyValue: false
    });
};

exports.contactPage = (req,res) => {
  const title = 'Create a New Blog';
  res.send('Contact Page here');
};

exports.aboutPage = (req,res) => {
  const title = 'Create a New Blog';
  res.send('About Page here');
};

exports.individualPosts = (req,res) => {
  const redirectTo = req.params.id;
  console.log('HELLOOO-------> ', _.toString(req.params.posts));
  console.log('THIS IS REDIRECTO-------> ', redirectTo);

  postModel.individualPost(redirectTo).then(foundPost => {
    console.log('RETURNED VALUE OF individualPost-------> ', foundPost)
    // console.log('YELLOHHH' ,foundPost[0].title);
    res.render('individualPosts', {
      post: foundPost
    });
  })
}

exports.deletePost = (req,res) => {
  const postID = req.params;
  console.log('HEREE_--------> ', postID);
  postModel.deletePost(postID).then(status => {
    if (status == false) {
      res.render('individualPosts', {
        post: foundPost
      });
    } else {
      postModel.showPosts().then(posts => {
        console.log('postController POSTS -------> ', posts);
        // if (posts.length > 0) {
        //   posts.forEach((post, i) => {
        //     if (!postsARR.includes(post)) {
        //       postsARR.push(post)
        //     }
        //   });
        //
        //
        //   // post.push(posts);
        //   console.log('THIS IS FINAL ARRAY-------> ' ,postsARR);
        // }
        res.render('index', {
          title: 'Start Blogging Again!',
          success: false,
          deleted: 'Post successfully deleted',
          posts: posts
         });
      })
    }
  })
};
