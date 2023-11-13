import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaberListComponent } from './haber-list.component';

describe('HaberListComponent', () => {
  let component: HaberListComponent;
  let fixture: ComponentFixture<HaberListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HaberListComponent]
    });
    fixture = TestBed.createComponent(HaberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
