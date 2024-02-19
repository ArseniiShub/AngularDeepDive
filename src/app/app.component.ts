import { Course } from './model/course';
import { AppConfig, CONFIG_TOKEN } from './config';
import { COURSES } from '../db-data';
import { CoursesService } from './courses/services/courses.service';
import { Component, Inject, Injector, OnInit } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CourseTitleComponent } from './course-title/course-title.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  courses = COURSES;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private appConfig: AppConfig,
    private injector: Injector) {
  }

  async ngOnInit() {
    const htmlElement = createCustomElement(CourseTitleComponent, { injector: this.injector });
    customElements.define('course-title', htmlElement);
  }

  save(course: Course) {
    this.coursesService.saveCourse(course).subscribe(() => console.log('Course Saved!'));
  }

  onEditCourse() {
    console.log('Switched to ADVANCED');
    this.courses[1].category = 'ADVANCED';
  }
}
