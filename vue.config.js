//git subtree push --prefix dist origin gh-pages
//firebase deploy --only hosting

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'? '/' : '/'
}