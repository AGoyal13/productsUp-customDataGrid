import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent implements OnInit {
  @Input() data: any[] = [];
  totalPage: number = 0;
  rowsPerPage: number = 10;
  currentPage: number = 1;
  productCount: number[] = [10,20,50,100];

  constructor() {}

  ngOnInit(): void {
  }

  ngOnChanges(change: SimpleChange) {
    this.currentPage = 1;
    if (this.data.length > 0) {
      this.totalPage = Math.ceil(this.data.length / this.rowsPerPage); 
    } else {
      this.totalPage = 1;
    }
  }
  getId(index: number, element: any) {
    return element.id ? element.id : element;
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  changeRowsPerPage(rows: any) {
    this.rowsPerPage = rows;
    this.totalPage = Math.ceil(this.data.length / this.rowsPerPage);
  }
}
