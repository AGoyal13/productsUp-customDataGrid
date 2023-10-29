import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let currentPage = args[0];
    let rowsPerPage = args[1];
    let slicingStartingIndex = (currentPage - 1) * rowsPerPage;
    let sliceEndIndex = slicingStartingIndex + rowsPerPage;
    return value.slice(slicingStartingIndex, sliceEndIndex);
  }
}