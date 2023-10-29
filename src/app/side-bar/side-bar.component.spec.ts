import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { SideBarComponent } from './side-bar.component';

describe('SideBarComponent', () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('addFilter',()=>{
    it('should add formGroup to formArray', ()=> {
      component.addFilter();
      expect(component.formFilters.length).toEqual(1);
    })
  });

  describe('removeFilter',()=>{
    it('should remove formGroup at particular index of formArray and call applyFilter if formarray has single group', ()=> {

      component.addFilter();
      component.removeFilter(0);
      expect(component.formFilters.length).toEqual(0);
    });
    it('should remove formGroup at particular index of formArray and should not call applyFilter if formarray has multiple groups', ()=> {
      component.addFilter();
      component.addFilter();
      let applyFilterSpy = spyOn(component,'applyFilter');
      component.removeFilter(0);
      expect(component.formFilters.length).toEqual(1);
      expect(applyFilterSpy).not.toHaveBeenCalled();
    })
  });
});
