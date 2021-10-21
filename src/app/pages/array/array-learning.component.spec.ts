import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ArrayLearningComponent} from './array-learning.component';

describe('LearningComponent', () => {
  let component: ArrayLearningComponent;
  let fixture: ComponentFixture<ArrayLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArrayLearningComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
