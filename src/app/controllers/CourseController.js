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
    const course = new Course(req.body);
    course.save();
    res.send('Save');
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