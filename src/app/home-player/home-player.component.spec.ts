import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlayerComponent } from './home-player.component';

describe('HomePlayerComponent', () => {
  let component: HomePlayerComponent;
  let fixture: ComponentFixture<HomePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
