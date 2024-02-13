import { Attribute, ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output, SkipSelf } from '@angular/core';
import { Course } from '../../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit, OnDestroy {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseChanged')
  courseEmitter = new EventEmitter<Course>();

  constructor(@SkipSelf() private coursesService: CoursesService,
              @Attribute('type') private type: string) {

    console.log('ctor', this.course);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngOnInit() {
    console.log('ngOnInit()', this.course);
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }


  onTitleChanged(newTitle: string) {
    this.course.description = newTitle;
  }
}
