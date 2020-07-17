const postModel = require('../models/postModel');


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
        bodyValue: bodyValue
      })

    } else {
      res.render('index', {
        title: 'Start Blogging Again!',
        success: 'Got it! You\'ve saved a new post!'});
    }
  })
};

exports.homePage = (req,res) => {
  res.render('index', { title: 'Start Blogging Again!', success: false });
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
