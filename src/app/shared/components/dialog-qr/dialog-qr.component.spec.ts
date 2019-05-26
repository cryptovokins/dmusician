import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogQrComponent } from './dialog-qr.component';

describe('DialogQrComponent', () => {
  let component: DialogQrComponent;
  let fixture: ComponentFixture<DialogQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
