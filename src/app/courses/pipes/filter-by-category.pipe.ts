import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../model/course';

@Pipe({
  name: 'filterByCategory',
  pure: false
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(courses: Course[], category: string) {
    console.log('Called transform');
    return courses.filter(c => c.category === category);
  }
}
