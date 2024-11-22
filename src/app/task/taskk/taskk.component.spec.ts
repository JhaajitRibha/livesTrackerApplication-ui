import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskkComponent } from './taskk.component';

describe('TaskkComponent', () => {
  let component: TaskkComponent;
  let fixture: ComponentFixture<TaskkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
