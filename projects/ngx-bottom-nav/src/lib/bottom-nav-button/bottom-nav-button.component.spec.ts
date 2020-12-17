import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavButtonComponent } from './bottom-nav-button.component';

describe('BottomNavButtonComponent', () => {
  let component: BottomNavButtonComponent;
  let fixture: ComponentFixture<BottomNavButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomNavButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomNavButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
