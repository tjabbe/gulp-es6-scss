const APP_SRC  = 'app'
const APP_DEST = 'build'

module.exports = {

  appSrc: APP_SRC,
  appDest: APP_DEST,

  styles: {
    watchSrc: APP_SRC + '/assets/styles/**/*.scss',
    src: APP_SRC + '/assets/styles/app.scss',
    dest: APP_DEST + '/css/',
    autoprefixerOpts: {
      browsers: ['last 2 versions', 'ie >= 10']
    }
  },

  views: {
    watchSrc: APP_SRC + '/views/**/*.*',
    src: APP_SRC + '/views/**/*.*',
    dest: APP_DEST
  }
}