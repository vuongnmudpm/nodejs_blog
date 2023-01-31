const Course = require('../../models/Course');

class SiteController {
  //get
  home(req, res, next) {
    Course.find({})
      .then((courses) => {
        courses = courses.map((course) => course.toObject());
        res.render('home', { courses });
      })
      .catch(next);
    // res.render('home');
  }

  //get/news/:slug
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
