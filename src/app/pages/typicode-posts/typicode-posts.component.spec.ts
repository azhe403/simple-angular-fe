import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypicodePostsComponent } from './typicode-posts.component';

describe('TypicodePostsComponent', () => {
  let component: TypicodePostsComponent;
  let fixture: ComponentFixture<TypicodePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypicodePostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypicodePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
