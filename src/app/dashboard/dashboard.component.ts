import { Component, OnInit } from '@angular/core';
import { tableData } from '../data/data';
import { Filter } from '../models/filter';
import { Product } from '../models/product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}
  records: Product[] = [];
  originalData: Product[] = Object.values(tableData);

  ngOnInit(): void {
    this.records = [...this.originalData];
  }

  filters(filtersArr: any) {
    this.records = this.originalData;
    filtersArr.forEach((_filter: Filter) => {
      this.records = this.records.filter((record) => {
        return this.checkRecord(record, _filter);
      });
    });
  }

  checkRecord(record: any, _filter: Filter) {
    let valid = false;
    record  = ("" + record[_filter.column_name]).toLowerCase();
    switch (_filter.operator) {
      case 'equals':
        valid = record == _filter.value.trim().toLowerCase();
        break;
      case 'not equal':
        valid = record != _filter.value.trim().toLowerCase();
        break;
      case 'contains':
        valid = record.indexOf(_filter.value.trim().toLowerCase()) > -1;
        break;
      case 'not contain':
        valid = record.indexOf(_filter.value.trim().toLowerCase()) === -1;
        break;
      case 'less than or equal to':
        valid = +record <= +_filter.value.trim().toLowerCase();
        break;
      case 'greater than or equal to':
        valid = +record >= +_filter.value.trim().toLowerCase();
        break;
      default:
        break;
    }
    return valid;
  }
}
