exports.get404 = (req, res, next) => {
  //catch all middleware for 404 page
  // res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
  res
    .status(404)
    .render('404', { pageTitle: 'Page Not Found', path: '/not-found' })
}
