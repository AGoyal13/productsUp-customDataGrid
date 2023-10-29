import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterDataPipe } from '../filter-data.pipe';

import { TableViewComponent } from './table-view.component';

describe('TableViewComponent', () => {
  let component: TableViewComponent;
  let fixture: ComponentFixture<TableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableViewComponent, FilterDataPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnChnages', () => {
    it ('table should reflect input data from parent component', ()=> {
      let record = [{"id": 1,
      "gtin": 99014233738092,
      "product_name": "Dimethicone, Avobenzone, Octinoxate, Octocrylene",
      "product_desc": "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
      "price": 90.18,
      "currency": "CNY",
      "category": "Nivea A Kiss of Recovery Medicated Lip Care",
      "gender": "",
      "quantity": 15,
      "size": "",
      "style": "architecture",
      "color": "Purple",
      "url": "http://fastcompany.com/ultrices/erat/tortor.js?a=condimentum&pede=id&posuere=luctus&nonummy=nec&integer=molestie&non=sed&velit=justo&donec=pellentesque&diam=viverra&neque=pede&vestibulum=ac&eget=diam&vulputate=cras&ut=pellentesque&ultrices=volutpat&vel=dui&augue=maecenas&vestibulum=tristique&ante=est&ipsum=et&primis=tempus&in=semper&faucibus=est&orci=quam&luctus=pharetra&et=magna&ultrices=ac&posuere=consequat&cubilia=metus&curae=sapien&donec=ut&pharetra=nunc",
      "image": "http://dummyimage.com/249x203.jpg/ff4444/ffffff",
      "image_additional": "http://dummyimage.com/157x160.jpg/ff4444/ffffff",
      "additional": "test",
      "source_video": "http://clips.vorwaerts-gmbh.de/big_buck_bunny.webm"}];
      component.data = record;
      fixture.detectChanges(); // to cover getID 
      component.ngOnChanges(new SimpleChange(null, record, true));
      expect(component.totalPage).toEqual(1);
    }); 
    it ('table should not reflect input data from parent component when input data is empty', ()=> {
      let record: any = [];
      component.data = record;
      component.ngOnChanges(new SimpleChange(null, record, true));
      expect(component.totalPage).toEqual(1);
    }); 
  });

  it('changePage method should change page number for pagination', ()=> {
    component.changePage(2);
    expect(component.currentPage).toEqual(2);
  });
  it('change number of products per page', ()=> {
    component.data = [{},{},{}];
    component.changeRowsPerPage(2);
    expect(component.rowsPerPage).toEqual(2);
    expect(component.totalPage).toEqual(2);
  });
});
