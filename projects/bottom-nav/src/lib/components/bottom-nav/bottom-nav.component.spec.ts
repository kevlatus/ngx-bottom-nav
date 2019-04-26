import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatIconModule, MatRippleModule, MatToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';

import {BottomNavComponent} from './bottom-nav.component';
import {BottomNavButtonComponent} from '../bottom-nav-button/bottom-nav-button.component';

describe('BottomNavComponent', () => {
  let component: BottomNavComponent;
  let fixture: ComponentFixture<BottomNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BottomNavComponent,
        BottomNavButtonComponent,
      ],
      imports: [
        RouterModule,
        MatRippleModule,
        MatIconModule,
        MatToolbarModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
