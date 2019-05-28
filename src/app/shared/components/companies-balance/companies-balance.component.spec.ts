import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesBalanceComponent } from './companies-balance.component';

describe('CompaniesBalanceComponent', () => {
  let component: CompaniesBalanceComponent;
  let fixture: ComponentFixture<CompaniesBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
