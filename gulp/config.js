const APP_SRC  = 'app'
const APP_DEST = 'build'

module.exports = {

  appSrc: APP_SRC,
  appDest: APP_DEST,

  views: {
    watchSrc: APP_SRC + '/views/**/*.*',
    src: APP_SRC + '/views/**/*.*',
    dest: APP_DEST
  }
}