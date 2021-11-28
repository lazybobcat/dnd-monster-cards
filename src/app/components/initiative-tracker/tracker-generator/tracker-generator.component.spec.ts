import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerGeneratorComponent } from './tracker-generator.component';

describe('TrackerGeneratorComponent', () => {
  let component: TrackerGeneratorComponent;
  let fixture: ComponentFixture<TrackerGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackerGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
