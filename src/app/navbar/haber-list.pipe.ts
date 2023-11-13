import {Pipe} from '@angular/core';
import { HaberList } from '../haber-list/haber-list';

@Pipe({
    name: 'filter'
})

export class FilterPipe {
    transform(value: HaberList[], filterText: string ): HaberList[] {
        filterText = filterText ? filterText.toLocaleLowerCase() : ''; 
        return filterText ? value.filter((p:HaberList) => p.title?.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
      }
}