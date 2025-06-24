import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    const lowerCaseSearchText = searchText.toLowerCase();

    return items.filter((item) =>
      item.toLowerCase().includes(lowerCaseSearchText)
    );
  }
}
