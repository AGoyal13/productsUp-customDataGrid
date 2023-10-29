import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('filters',()=> {
    it('should filter content based on 1 filter for checking equality', () => {
      let records = [{"id": 1,
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
      let filtersArr = [{column_name: 'gtin', operator: 'equals', value: '99014233738092'}];
      component.filters(filtersArr);
      expect(component.records).toEqual(records);
    });
    it('should not filter content for invalid filter', () => {
      let records: any = [];
      let filtersArr = [{column_name: 'wrongFilter', operator: 'wrongFilter', value: '99014233738092'}, {column_name: 'currency', operator: 'equals', value: 'CNY'}, {column_name: 'currency', operator: 'contains', value: 'CNY'}];
      component.filters(filtersArr);
      expect(component.records).toEqual(records);
    });
    it('should filter content for multiple filters for checking equality', () => {
      let records = [{"id": 1,
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
      let filtersArr = [{column_name: 'gtin', operator: 'equals', value: '99014233738092'},
        {column_name: 'price', operator: 'greater than or equal to', value: '90.18'},  
        {column_name: 'currency', operator: 'not contain', value: 'EUR'}, 
        {column_name: 'quantity', operator: 'less than or equal to', value: '15'},
        {column_name: 'product_name', operator: 'contains', value: 'Dimethicone'},
        {column_name: 'gender', operator: 'not equal', value: 'M'}
      ];
      component.filters(filtersArr);
      expect(component.records).toEqual(records);
    });
    it('should not filter content for no filters passed', () => {
      let filtersArr: any = [];
      component.filters(filtersArr);
      expect(component.records).toEqual(component.originalData);
    });
  })
});
