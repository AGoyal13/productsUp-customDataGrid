import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor() { }
  @Input('productCount') countPerPage: number[] = [10];
  @Input('currentPage') currentPage: number = 1;
  @Input('totalPage') totalPage = 1;
  @Output('changePageNumber') changePageNumber = new EventEmitter<number>();
  @Output('rowsPerPage') rowsPerPage = new EventEmitter<number>();

  ngOnInit(): void {
  }
  getId(index: number, element: any) {
    return element;
  }

  changePage(page: number) {
    this.currentPage  = page;
    this.changePageNumber.emit(page);
  }

  changeRowsPerPage(event: any) {
    this.rowsPerPage.emit(+event.target?.value);
  }
}
