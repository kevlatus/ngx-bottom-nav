import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumPageComponent } from './forum-page.component';

describe('ForumPageComponent', () => {
  let component: ForumPageComponent;
  let fixture: ComponentFixture<ForumPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
