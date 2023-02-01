const { query } = require('express');
const Course = require('../../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

//[GET] Show course
class CourseController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        course = course ? course.toObject() : course;
        res.render('course/index', { course });
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
    course
      .save()
      .then(() => res.redirect('/'))
      .catch((error) => {});
  }

  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render('course/edit', {
          course: mongooseToObject(course),
        }),
      )
      .catch(next);
  }

  //[PUT] Update
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }

  //[DELETE] /course/:id
  delete(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  //[DELETE] /course/:id/force
  forceDestroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  //[PATCH] /course/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
}

module.exports = new CourseController();
