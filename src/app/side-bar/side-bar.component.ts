import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { columnsForFilter, filterDropdownMap } from '../data/data';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  filterForm = this.fb.group({
    formFilters: this.fb.array([
    ])
  });
  get formFilters () {
    return this.filterForm.get('formFilters') as FormArray;
  }
  filterDropdownMap = filterDropdownMap;
  columnsForFilter = columnsForFilter;
  @Output() updateFilters = new EventEmitter<any>();
 
  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {}

  addFilter() {
    const filterGroup = this.fb.group({
      column_name: ['', Validators.required],
      operator: ['', Validators.required],
      value: ['', Validators.required]
  });
  this.formFilters.push(filterGroup);
  }

  removeFilter(lessonIndex: number) {
    this.formFilters.removeAt(lessonIndex);
    if (this.filterForm?.get('formFilters')?.value?.length === 0) {
      this.applyFilter();
    }
  }

  applyFilter() {
    this.updateFilters.emit(this.filterForm.get('formFilters')?.value);
  }
}
