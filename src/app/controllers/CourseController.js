const { query } = require('express');
const Course = require('../../models/Course');

//[GET] Show course
class CourseController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then(course => {
        course = course ? course.toObject() : course;
        res.render('course/index', { course })
      })
      .catch(next);
  }

  //[GET] Create
  create(req, res, next) {
    res.render('course/create');
  }

  //[POST] Create
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hq720.jpg`;     
    const course = new Course(formData);
    course.save()
    .then(() => res.redirect('/'))
    .catch(error => {

    });
  }

  //[POST] Update
  update(req, res, next) {
    res.send('Update Course');
  }

  //Delete
  delete(req, res, next) {
    res.send('Delete Course');
  }
}

module.exports = new CourseController();