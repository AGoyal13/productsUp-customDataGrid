import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('changePage method should change page number for pagination', ()=> {
    component.changePage(2);
    expect(component.currentPage).toEqual(2);
  });
  it('change number of products per page', ()=> {
    let rowCountChangeSpy = spyOn(component.rowsPerPage, 'emit'); 
    component.changeRowsPerPage({target: {value: 2}});
    expect(rowCountChangeSpy).toHaveBeenCalledWith(2);
  });
});
