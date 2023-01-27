const Course = require("../../models/Course");

class SiteController {
  //get
  home(req, res) {
    // Course.find({}, function(err, courses) {
    //   if(!err) {
    //     res.json(courses);
    //   } else {
    //     res.status(400).json({
    //       error: 'ERROR!!!'
    //     });
    //   }
    // });
    res.render('home');
  }

  //get/news/:slug
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
