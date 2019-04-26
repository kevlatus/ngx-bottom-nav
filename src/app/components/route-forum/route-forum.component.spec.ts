import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RouteForumComponent} from './route-forum.component';

describe('RouteForumComponent', () => {
  let component: RouteForumComponent;
  let fixture: ComponentFixture<RouteForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RouteForumComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
