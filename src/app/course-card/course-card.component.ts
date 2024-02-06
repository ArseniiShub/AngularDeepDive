import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChild
} from '@angular/core';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements AfterViewInit, AfterContentInit {


  @Output()
  courseSelected = new EventEmitter<Course>();

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @ContentChildren(CourseImageComponent, { read: ElementRef })
  images: QueryList<CourseImageComponent>;

  onViewCourseClick() {
    this.courseSelected.emit(this.course);
  }

  ngAfterViewInit(): void {
  }

  ngAfterContentInit(): void {
    console.log('image:', this.images);

  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    if (this.course.category === 'BEGINNER') {
      return 'beginner';
    }
  }

  cardStyles() {
    return { 'background-image': 'url(' + this.course.iconUrl + ')' };
  }
}
