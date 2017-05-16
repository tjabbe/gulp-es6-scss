import gulp from 'gulp'
import runSequence from 'run-sequence'

const defaultTask = () => (
  runSequence('styles', 'scripts:vendors', 'scripts:app', 'views')
)

gulp.task('default', defaultTask)

export default defaultTask