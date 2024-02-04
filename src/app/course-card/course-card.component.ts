import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  @Output()
  courseSelected = new EventEmitter<Course>();

  @Input()
  course: Course;

  onViewCourseClick() {
    console.log('Card component - button clicked ...');

    this.courseSelected.emit(this.course);
  }
}
