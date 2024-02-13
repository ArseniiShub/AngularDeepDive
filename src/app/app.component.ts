import { Course } from './model/course';
import { AppConfig, CONFIG_TOKEN } from './config';
import { COURSES } from '../db-data';
import { CoursesService } from './courses/services/courses.service';
import { Component, Inject, OnInit } from '@angular/core';

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
    console.log('Switched to ADVANCED');
    this.courses[1].category = 'ADVANCED';
  }
}
