import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCostsComponent } from './list-costs.component';

describe('ListCostsComponent', () => {
  let component: ListCostsComponent;
  let fixture: ComponentFixture<ListCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCostsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
