import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgsSliderComponent } from './imgs-slider.component';

describe('ImgsSliderComponent', () => {
  let component: ImgsSliderComponent;
  let fixture: ComponentFixture<ImgsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgsSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
