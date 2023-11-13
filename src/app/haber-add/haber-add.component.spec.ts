import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaberAddComponent } from './haber-add.component';

describe('HaberAddComponent', () => {
  let component: HaberAddComponent;
  let fixture: ComponentFixture<HaberAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HaberAddComponent]
    });
    fixture = TestBed.createComponent(HaberAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
