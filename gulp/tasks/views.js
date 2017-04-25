import gulp from 'gulp'
import { views } from '../config'

const viewsTask = () => (
  gulp.src(views.src)
    .pipe(gulp.dest(views.dest))
)

gulp.task('views', viewsTask)

export default viewsTask