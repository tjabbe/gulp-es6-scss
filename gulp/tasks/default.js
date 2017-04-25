import gulp from 'gulp'
import runSequence from 'run-sequence'

const defaultTask = () => (
  runSequence('views')
)

gulp.task('default', defaultTask)

export default defaultTask