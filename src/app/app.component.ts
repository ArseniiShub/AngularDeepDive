import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Inject, OnInit } from '@angular/core';
import { Course } from './model/course';
import { Observable } from 'rxjs';
import { CoursesService } from './services/courses.service';
import { AppConfig, CONFIG_TOKEN } from './config';
import { COURSES } from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  courses = COURSES;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private appConfig: AppConfig) {
  }

  async ngOnInit() {
  //   this.coursesService.loadCourses().subscribe((val) => {
  //     this.courses = val;
  //   });
  }

  save(course: Course) {
    this.coursesService.saveCourse(course).subscribe(() => console.log('Course Saved!'));
  }

  onEditCourse() {
    this.courses = [undefined];
  }
}
