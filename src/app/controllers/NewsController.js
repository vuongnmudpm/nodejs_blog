class NewsController {
    //get
    index(req, res) {
        res.render('news');
    }

    //get /news/:slug
    show(req, res) {
        res.send('News Detail');
    }
}

module.exports = new NewsController;


