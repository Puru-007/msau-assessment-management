import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsDetailsComponent } from './exams-details.component';

describe('ExamsDetailsComponent', () => {
  let component: ExamsDetailsComponent;
  let fixture: ComponentFixture<ExamsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
